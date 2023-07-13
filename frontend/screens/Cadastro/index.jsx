import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";

import Title from "../../components/Title/index.jsx";
import Button from "../../components/Button/index.jsx";
import InputText from "../../components/InputText/index.jsx";

import styles from "./style.js";
import { schemaValidationRegister } from "../../utils/validations.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import API from "../../api/index.js";

export default function Cadastro({ navigation, route }) {
  const { role } = route.params;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationRegister),
  });

  async function handleRegister({
    name,
    email,
    password,
    confirmPassword,
    course = undefined,
  }) {
    try {
      console.log("register");
      await API.post("user/register", {
        name,
        email,
        password,
        confirmPassword,
        course,
        type: role,
      });
      navigation.navigate("Login");
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <View style={styles.main}>
        <Title>Cadastre-se agora mesmo!</Title>
      </View>

      <View>
        <InputText
          placeholderText={"Nome"}
          name="name"
          control={control}
          autoCorrect={false}
          autoCapitalize="none"
          error={errors.name}
        />
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
        <InputText
          placeholderText={"Confirmar Senha"}
          name="confirmPassword"
          control={control}
          secureTextEntryText={true}
          error={errors.confirmPassword}
        />
        {role === "estagiário" && (
          <InputText
            placeholderText={"Curso"}
            name="course"
            control={control}
            autoCorrect={false}
            autoCapitalize="none"
            error={errors.course}
          />
        )}
      </View>

      <View style={styles.buttons}>
        <Button type="faded" behavior={handleSubmit(handleRegister)}>
          Cadastrar
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
