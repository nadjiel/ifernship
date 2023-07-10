import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome do estagiário deve ser informado"],
    },
    email: {
      type: String,
      required: [true, "E-mail do estagiário deve ser informado"],
      unique: [true, "E-mail do estagiário deve ser único"],
    },
    password: {
      type: String,
      required: [true, "Senha do estagiário deve ser informada"],
    },
    course: {
      type: String,
    },
    type: {
      type: String,
      required: [true, "Tipo de usuário deve ser informado"],
      enum: {
        values: ["estagiário", "coordenador"],
        message: "O tipo de usuário deve ser estagiário ou coordenador",
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", schema);

export default User;
