import Enterprise from "../models/enterpriseModel.js";

const saveEnterprise = async (req, res) => {
  try {
    const {
      name,
      description,
      cnpj,
      email,
      picture,
      city,
      state,
      latitude,
      longitude,
    } = req.body;

    await Enterprise.create({
      name,
      description,
      cnpj,
      email,
      picture,
      city,
      state,
      latitude,
      longitude,
    });

    res.status(201).send("Empresa criada.");
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao salvar.");
  }
};

const listEnterprises = async (req, res) => {
  try {
    const enterprises = await Enterprise.find();

    res.status(200).send(enterprises);
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao listar.");
  }
};

const findEnterprise = async (req, res) => {
  try {
    const { id } = req.params;

    const enterprise = await Enterprise.findById(id);

    if (!enterprise) {
      return res.status(404).send(`Não há empresa com o ID ${id}.`);
    }

    res.status(200).send(enterprise);
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
    const { id } = req.params;
    const {
      name,
      description,
      cnpj,
      email,
      picture,
      city,
      state,
      latitude,
      longitude,
    } = req.body;

    const enterprise = await Enterprise.findByIdAndUpdate(
      id,
      {
        name,
        description,
        cnpj,
        email,
        picture,
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
