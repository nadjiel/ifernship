import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet } from 'react-native';

import Title from "../../components/Title/index.jsx";
import Paragraph from "../../components/Paragraph/index.jsx";
import Button from "../../components/Button/index.jsx";

export default function Home() {
  return (
    <View style={ styles.container }>
      <Image
        source={ require("../../assets/logo.png") }
        style={ styles.logo }
      />
      <View style={ styles.main }>
        <Title>Vagas de Estágios</Title>
        <Paragraph>
          Encontre o estágio dos seus sonhos e comece a trilhar
          o caminho para o sucesso profissional! Não perca mais
          tempo procurando vagas manualmente, baixe agora e comece
          a construir seu futuro!
        </Paragraph>
      </View>
      <View style={ styles.buttons }>
        <Button>Entrar</Button>
        <Button type="faded">Registrar-se</Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  logo: {
    marginTop: 100
  },
  main: {
    gap: 25,
    marginTop: 100,
    marginHorizontal: 25
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 25,
    marginTop: 100,
    marginHorizontal: 25
  }
});