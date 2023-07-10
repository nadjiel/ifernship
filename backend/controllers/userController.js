import User from "../models/userModel.js";
import { hash, compare } from "bcrypt";
import jsonWebToken from "jsonwebtoken";

const register = async (req, res) => {
  const { name, email, password, course, type } = req.body;

  const user = await User.findOne({
    email: email,
  });

  if (user) {
    return res.status(400).send("Já existe um usuário com esse email.");
  }

  const passwordHash = await hash(password, 10);

  await User.create({
    name,
    email,
    password: passwordHash,
    course,
    type,
  });

  return res.status(201).json("Usuário criado com sucesso.");
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email: email,
  });

  if (!user) {
    return res.status(401).send("Email ou senha inválido.");
  }

  const isPassword = await compare(password, user.password);

  if (!isPassword) {
    return res.status(401).send("Email ou senha inválido.");
  }

  const token = jsonWebToken.sign(
    {
      name: user.name,
    },
    process.env.KEY_TOKEN,
    {
      expiresIn: "1d",
      algorithm: "HS256",
      subject: String(user.id),
    }
  );

  return res.status(200).json({ token, user });
};

export default {
  register,
  login,
};
