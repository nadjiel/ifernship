import mongoose from "mongoose";

const schema = mongoose.Schema({
  professionalProfile: {
    type: String,
    required: [ true, "Perfil do profissional deve ser informado" ]
  },
  jobProfile: {
    type: String,
    required: [ true, "Perfil da vaga deve ser informado" ]
  },
  benefits: {
    type: String,
    required: false
  },
  workModality: {
    type: String,
    required: [ true, "Estilo de trabalho deve ser informado" ],
    enum: {
      values: [ "presencial", "remoto", "híbrido"],
      message: "Estilo de trabalho deve ser presencial, remoto ou híbrido"
    }
  },
  // activity: {},
  weeklyWorkload: {
    type: Number,
    required: [ true, "Carga horária semanal deve ser informada" ]
  },
  applicationProcedures: {
    type: String,
    required: [ true, "Procedimentos de candidatura devem ser informados" ]
  },
  available: {
    type: Boolean,
    required: [ true, "Disponibilidade deve ser informada" ],
    default: true
  },
  coordinatorEmail: {
    type: String,
    ref: "Coordinator.email",
    required: [ true, "Email do coordenador deve ser informado" ]
  },
  enterpriseCnpj: {
    type: String,
    ref: "Enterprise.cnpj",
    required: [ true, "CNPJ da empresa deve ser informado" ]
  },
}, { timestamps: true });

const Internship = mongoose.model("Internship", schema);

export default Internship;
