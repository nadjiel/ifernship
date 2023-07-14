import mongoose, { Schema } from "mongoose";

const schema = Schema(
  {
    position: {
      type: String,
      required: [true, "O cargo deve ser informado"],
    },
    professionalProfile: {
      type: String,
      required: [true, "Perfil do profissional deve ser informado"],
    },
    jobProfile: {
      type: String,
      required: [true, "Perfil da vaga deve ser informado"],
    },
    benefits: {
      type: String,
      required: false,
    },
    workModality: {
      type: String,
      required: [true, "Estilo de trabalho deve ser informado"],
      enum: {
        values: ["presencial", "remoto", "híbrido"],
        message: "Estilo de trabalho deve ser presencial, remoto ou híbrido",
      },
    },
    activity: {
      type: String,
      required: [true, "Atividade deve ser informada"],
    },
    weeklyWorkload: {
      type: Number,
      required: [true, "Carga horária semanal deve ser informada"],
    },
    available: {
      type: Boolean,
      required: [true, "Disponibilidade deve ser informada"],
      default: true,
    },
    enterprise: {
      type: Schema.Types.ObjectId,
      ref: "Enterprise",
      required: [true, "Id da empresa deve ser informado"],
    },
  },
  { timestamps: true }
);

const Internship = mongoose.model("Internship", schema);

export default Internship;
