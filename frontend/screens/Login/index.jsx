import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";

import Title from "../../components/Title/index.jsx";
import Paragraph from "../../components/Paragraph/index.jsx";
import InputText from "../../components/InputText/index.jsx";
import Button from "../../components/Button/index.jsx";

import styles from "./style.js";
import { useAuthContext } from "../../context/auth.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidationLogin } from "../../utils/validations.js";

export default function Login() {
  const { login } = useAuthContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationLogin),
  });

  async function handleLogin({ email, password }) {
    try {
      await login(email, password);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <View style={styles.main}>
        <Title>Bem-vindo de volta</Title>
        <Paragraph>
          Faça login e tenha acesso a um mundo de oportunidades profissionais
          com nosso aplicativo de vagas de estágio. Não perca mais tempo, comece
          agora a buscar a vaga perfeita para você!
        </Paragraph>
      </View>

      <View>
        <InputText
          placeholderText={"Email"}
          name="email"
          control={control}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          error={errors.email}
        />
        <InputText
          placeholderText={"Senha"}
          name="password"
          control={control}
          secureTextEntryText={true}
          error={errors.password}
        />
      </View>

      <View style={styles.buttons}>
        <Button behavior={handleSubmit(handleLogin)}>Entrar</Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
