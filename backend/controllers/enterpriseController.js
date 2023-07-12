import Enterprise from "../models/enterpriseModel.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import User from "../models/userModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const saveEnterprise = async (req, res) => {
  try {
    const image = req.file;
    const {
      name,
      description,
      cnpj,
      email,
      city,
      state,
      latitude,
      longitude,
      coordinatorId,
    } = req.body;

    const coordinator = await User.findById(coordinatorId);

    console.log(coordinator.type);
    if (coordinator.type !== "coordenador") {
      return res
        .status(400)
        .send(`Empresa deve ser criada por um usuário do tipo coordenador.`);
    }

    const imagePath = image?.filename;
    const imageType = image?.mimetype;

    await Enterprise.create({
      name,
      description,
      cnpj,
      email,
      picture: image
        ? {
            data: fs.readFileSync(join(__dirname, "..", "uploads", imagePath)),
            contentType: imageType,
          }
        : null,
      city,
      state,
      latitude,
      longitude,
      coordinator: coordinatorId,
    });

    res.status(201).send("Empresa criada.");
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao salvar.");
  }
};

const listEnterprises = async (req, res) => {
  try {
    const enterprises = await Enterprise.find().populate("coordinator");

    const enterprisesWithoutPassword = enterprises.map((enterprise) => {
      return {
        _id: enterprise._id,
        name: enterprise.name,
        description: enterprise.description,
        cnpj: enterprise.cnpj,
        email: enterprise.email,
        city: enterprise.city,
        state: enterprise.state,
        latitude: enterprise.latitude,
        longitude: enterprise.longitude,
        coordinator: {
          _id: enterprise.coordinator._id,
          name: enterprise.coordinator.name,
          email: enterprise.coordinator.email,
        },
      };
    });

    res.status(200).send(enterprisesWithoutPassword);
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao listar.");
  }
};

const findEnterprise = async (req, res) => {
  try {
    const { id } = req.params;

    const enterprise = await Enterprise.findById(id).populate("coordinator");

    if (!enterprise) {
      return res.status(404).send(`Não há empresa com o ID ${id}.`);
    }

    const enterpriseWithoutPassword = {
      _id: enterprise._id,
      name: enterprise.name,
      description: enterprise.description,
      cnpj: enterprise.cnpj,
      email: enterprise.email,
      city: enterprise.city,
      state: enterprise.state,
      latitude: enterprise.latitude,
      longitude: enterprise.longitude,
      coordinator: {
        _id: enterprise.coordinator._id,
        name: enterprise.coordinator.name,
        email: enterprise.coordinator.email,
      },
    };

    res.status(200).send(enterpriseWithoutPassword);
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao obter empresa.");
  }
};

const deleteEnterprise = async (req, res) => {
  try {
    const { id } = req.params;

    const enterprise = await Enterprise.findByIdAndDelete(id);

    if (!enterprise) {
      return res.status(404).send(`Não há empresa com o ID ${id}.`);
    }

    res.status(200).send("Empresa deletada com sucesso!");
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao deletar.");
  }
};

const updateEnterprise = async (req, res) => {
  try {
    const image = req.file;
    const { id } = req.params;
    const { name, description, cnpj, email, city, state, latitude, longitude } =
      req.body;

    const imagePath = image?.filename;
    const imageType = image?.mimetype;

    const enterprise = await Enterprise.findByIdAndUpdate(
      id,
      {
        name,
        description,
        cnpj,
        email,
        picture: image
          ? {
              data: fs.readFileSync(
                join(__dirname, "..", "uploads", imagePath)
              ),
              contentType: imageType,
            }
          : null,
        city,
        state,
        latitude,
        longitude,
      },
      { new: true, runValidators: true }
    );

    if (!enterprise) {
      return res.status(404).send(`Não há empresa com o ID ${id}.`);
    }

    res.status(200).send("Empresa atualizada!");
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao atualizar.");
  }
};

export default {
  saveEnterprise,
  listEnterprises,
  deleteEnterprise,
  updateEnterprise,
  findEnterprise,
};
