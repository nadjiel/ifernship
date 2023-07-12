import mongoose, { Schema } from "mongoose";

const schema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nome da empresa deve ser informado"],
    },
    description: {
      type: String,
      required: [true, "Descrição da empresa deve ser informada"],
    },
    cnpj: {
      type: String,
      required: [true, "CNPJ da empresa deve ser informado"],
      unique: [true, "CNPJ da empresa deve ser único"],
    },
    email: {
      type: String,
      required: [true, "E-mail da empresa deve ser informado"],
      unique: [true, "E-mail da empresa deve ser único"],
    },
    picture: {
      data: Buffer,
      contentType: String,
    },
    city: {
      type: String,
      required: [true, "Cidade da empresa deve ser informada"],
    },
    state: {
      type: String,
      required: [true, "Estado da empresa deve ser informado"],
    },
    latitude: {
      type: Number,
      required: [true, "Latitude da empresa deve ser informada"],
    },
    longitude: {
      type: Number,
      required: [true, "Longitude da empresa deve ser informada"],
    },
    coordinator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Id do coordenador deve ser informado"],
    },
  },
  { timestamps: true }
);

const Enterprise = mongoose.model("Enterprise", schema);

export default Enterprise;
