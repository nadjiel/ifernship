import { ObjectID } from "bson";
import client from "../database/index.js";

const saveInternship = async (req, res) => {
  const internship = req.body;

  //TODO VALIDACOES
  if(
    typeof internship.professionalProfile != "string" ||
    !internship.professionalProfile
  ) {
    res.status(400).send("Perfil do profissional inválido ou não informado.");
    return;
  }

  if(
    typeof internship.jobProfile != "string" ||
    !internship.jobProfile
  ) {
    res.status(400).send("Perfil da vaga inválido ou não informado.");
    return;
  }

  if(
    (typeof internship.benefits != "string" || internship.benefits == "") &&
    internship.benefits != undefined
  ) {
    res.status(400).send("Benefícios devem ser string não vazia ou undefined.");
    return;
  }

  if(
    internship.workModality != "presencial" &&
    internship.workModality != "remoto" &&
    internship.workModality != "híbrido"
  ) {
    res.status(400).send("Modalidade de trabalho deve ser presencial, remoto ou híbrido.");
    return;
  }

  // if (internship.title === undefined || internship.content === undefined) {
  //   res.status(400).send("Título e conteúdo devem ser informados.");
  //   return;
  // }

  // if (internship.title === "" || internship.content === "") {
  //   res.status(400).send("Título ou conteúdo não devem ser vazios.");
  //   return;
  // }

  try {
    await client.connect();
    const internshipsCollection = client
      .db("ifernship")
      .collection("internships");
    const { insertedId } = await internshipsCollection.insertOne(internship);

    res.status(201).send("Estágio criado.");
  } catch {
    res.status(400).send("Falha ao salvar.");
  } finally {
    client.close();
  }
};

const listInternships = async (req, res) => {
  try {
    await client.connect();
    const internshipsCollection = client
      .db("ifernship")
      .collection("internships");

    const internships = await internshipsCollection.find().toArray();

    res.status(200).send(internships);
  } catch {
    res.status(400).send("Falha ao listar.");
  } finally {
    client.close();
  }
};

const findInternship = async (req, res) => {
  const { id } = req.params;

  try {
    await client.connect();
    const internshipsCollection = client
      .db("ifernship")
      .collection("internships");

    const internship = await internshipsCollection.findOne({
      _id: new ObjectID(id),
    });

    if (!internship) {
      res.status(400).send("Estágio não encontrado.");
      return;
    }

    res.status(200).send(internship);
  } catch {
    res.status(400).send("Falha ao obter estágio.");
  } finally {
    client.close();
  }
};

const deleteInternship = async (req, res) => {
  const { id } = req.params;

  try {
    await client.connect();
    const internshipsCollection = client
      .db("ifernship")
      .collection("internships");
    const result = await internshipsCollection.deleteOne({
      _id: new ObjectID(id),
    });

    if (result.deletedCount === 0) {
      res.status(400).send("Estágio não encontrado.");
      return;
    }

    res.status(200).send("Estágio deletado com sucesso!");
  } catch {
    res.status(400).send("Falha ao deletar.");
  } finally {
    client.close();
  }
};

const updateInternship = async (req, res) => {
  //TODO ADICIONAR E VALIDAR OUTROS ATRIBUTOS
  const { name } = req.body;
  const { id } = req.params;

  try {
    await client.connect();
    const internshipsCollection = client
      .db("ifernship")
      .collection("internships");
    const result = await internshipsCollection.updateOne(
      { _id: new ObjectID(id) },
      {
        $set: {
          name,
        },
      }
    );

    if (result.modifiedCount === 0) {
      res.status(400).send("Estágio não encontrado.");
      return;
    }

    res.status(200).send("Estágio atualizado!");
  } catch {
    res.status(400).send("Falha ao atualizar.");
  } finally {
    client.close();
  }
};

export default {
  saveInternship,
  listInternships,
  deleteInternship,
  updateInternship,
  findInternship,
};
