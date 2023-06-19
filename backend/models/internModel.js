import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [ true, "Nome do estagiário deve ser informado" ]
  },
  email: {
    type: String,
    required: [ true, "E-mail do estagiário deve ser informado" ],
    unique: [ true, "E-mail do estagiário deve ser único" ]
  },
  password: {
    type: String,
    required: [ true, "Senha do estagiário deve ser informada" ]
  },
  course: {
    type: String,
    required: [ true, "Curso do estagiário deve ser informado" ]
  }
}, { timestamps: true });

const Intern = mongoose.model("Intern", schema);

export default Intern;
