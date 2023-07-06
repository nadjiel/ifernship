import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';

import Title from "../../components/Title/index.jsx";
import Paragraph from "../../components/Paragraph/index.jsx";
import Button from "../../components/Button/index.jsx";

import styles from "./style.js";

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