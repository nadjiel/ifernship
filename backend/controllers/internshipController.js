import Internship from "../models/internshipModel.js";

const saveInternship = async (req, res) => {
  try {
    // const { email: coordinatorEmail } = req.user;

    const {
      professionalProfile,
      jobProfile,
      benefits,
      workModality,
      weeklyWorkload,
      applicationProcedures,
      enterpriseCnpj
    } = req.body;

    await Internship.create({
      professionalProfile,
      jobProfile,
      benefits,
      workModality,
      weeklyWorkload,
      applicationProcedures,
      // coordinatorEmail: "coordinator1@email.com",
      enterpriseCnpj
    });

    res.status(201).send("Estágio criado.");
  } catch {
    res.status(400).send("Falha ao salvar.");
  }
};

const listInternships = async (req, res) => {
  try {
    const internships = await Internship.find();

    res.status(200).send(internships);
  } catch {
    res.status(400).send("Falha ao listar.");
  }
};

const findInternship = async (req, res) => {
  try {
    const { id } = req.params;

    const internship = await Internship.findById(id);

    if(!internship) {
      return res.status(404).send(`Não há estágio com o ID ${id}.`);
    }

    res.status(200).send(internship);
  } catch {
    res.status(400).send("Falha ao obter estágio.");
  }
};

const deleteInternship = async (req, res) => {
  try {
    const { id } = req.params;

    const internship = await Internship.findByIdAndDelete(id);

    if(!internship) {
      return res.status(404).send(`Não há estágio com o ID ${id}.`);
    }

    res.status(200).send("Estágio deletado com sucesso!");
  } catch {
    res.status(400).send("Falha ao deletar.");
  }
};

const updateInternship = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      professionalProfile,
      jobProfile,
      benefits,
      workModality,
      weeklyWorkload,
      applicationProcedures,
      available,
      coordinatorEmail,
      enterpriseCnpj
    } = req.body;

    const internship = await Internship.findByIdAndUpdate(
      id,
      {
        professionalProfile,
        jobProfile,
        benefits,
        workModality,
        weeklyWorkload,
        applicationProcedures,
        available,
        coordinatorEmail,
        enterpriseCnpj
      },
      { new: true, runValidators: true }
    );

    if(!internship) {
      return res.status(404).send(`Não há estágio com o ID ${id}.`);
    }

    res.status(200).send("Estágio atualizado!");
  } catch {
    res.status(400).send("Falha ao atualizar.");
  }
};

export default {
  saveInternship,
  listInternships,
  deleteInternship,
  updateInternship,
  findInternship,
};
