import { ObjectID } from "bson";
import client from "../database/index.js";

const saveEnterprise = async (req, res) => {
  const enterprise = req.body;

  //TODO VALIDACOES

  try {
    await client.connect();
    const enterprisesCollection = client
      .db("ifernship")
      .collection("enterprises");
    const { insertedId } = await enterprisesCollection.insertOne(enterprise);

    res.status(201).send("Empresa criada.");
  } catch {
    res.status(400).send("Falha ao salvar.");
  } finally {
    client.close();
  }
};

const listEnterprises = async (req, res) => {
  try {
    await client.connect();
    const enterprisesCollection = client
      .db("ifernship")
      .collection("enterprises");

    const enterprises = await enterprisesCollection.find().toArray();

    res.status(200).send(enterprises);
  } catch {
    res.status(400).send("Falha ao listar.");
  } finally {
    client.close();
  }
};

const findEnterprise = async (req, res) => {
  const { id } = req.params;

  try {
    await client.connect();
    const enterprisesCollection = client
      .db("ifernship")
      .collection("enterprises");

    const enterprise = await enterprisesCollection.findOne({
      _id: new ObjectID(id),
    });

    if (!enterprise) {
      res.status(400).send("Empresa não encontrada.");
      return;
    }

    res.status(200).send(enterprise);
  } catch {
    res.status(400).send("Falha ao obter empresa.");
  } finally {
    client.close();
  }
};

const deleteEnterprise = async (req, res) => {
  const { id } = req.params;

  try {
    await client.connect();
    const enterprisesCollection = client
      .db("ifernship")
      .collection("enterprises");
    const result = await enterprisesCollection.deleteOne({
      _id: new ObjectID(id),
    });

    if (result.deletedCount === 0) {
      res.status(400).send("Empresa não encontrada.");
      return;
    }

    res.status(200).send("Empresa deletada com sucesso!");
  } catch {
    res.status(400).send("Falha ao deletar.");
  } finally {
    client.close();
  }
};

const updateEnterprise = async (req, res) => {
  //TODO ADICIONAR E VALIDAR OUTROS ATRIBUTOS
  const { name } = req.body;
  const { id } = req.params;

  try {
    await client.connect();
    const enterprisesCollection = client
      .db("ifernship")
      .collection("enterprises");
    const result = await enterprisesCollection.updateOne(
      { _id: new ObjectID(id) },
      {
        $set: {
          name,
        },
      }
    );

    if (result.modifiedCount === 0) {
      res.status(400).send("Empresa não encontrada.");
      return;
    }

    res.status(200).send("Empresa atualizada!");
  } catch {
    res.status(400).send("Falha ao atualizar.");
  } finally {
    client.close();
  }
};

export default {
  saveEnterprise,
  listEnterprises,
  deleteEnterprise,
  updateEnterprise,
  findEnterprise,
};
