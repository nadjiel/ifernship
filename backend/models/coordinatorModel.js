import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [ true, "Nome do coordenador deve ser informado" ]
  },
  email: {
    type: String,
    required: [ true, "E-mail do coordenador deve ser informado" ],
    unique: [ true, "E-mail do coordenador deve ser único" ]
  },
  password: {
    type: String,
    required: [ true, "Senha do coordenador deve ser informada" ]
  }
}, { timestamps: true });

const Coordinator = mongoose.model("Coordinator", schema);

export default Coordinator;
