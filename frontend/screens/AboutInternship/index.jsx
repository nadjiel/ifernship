import { ScrollView, Image, View, Text } from "react-native";

import theme from "../../global/theme.js";

import Title from "../../components/Title/index.jsx";
import Label from "../../components/Label/index.jsx";
import Paragraph from "../../components/Paragraph/index.jsx";
import Button from "../../components/Button/index.jsx";

import { Container, Header, EditButton } from "./style.js";

export default function AboutInternship({ route, navigation }) {
  return (
    <ScrollView>
      <Container>
        <Header>
          <Title align="left" level={2} color={ theme.fontColors.secondary }>
            { route.params.enterprise }
          </Title>
          {
          route.params.coordinator ? 
          <EditButton onPress={ () => { navigation.navigate("FormEstagio") }}>
            <Text>Editar</Text>
          </EditButton> :
          <></>
          }
        </Header>
        
        <Label
          image={ <Image source={ require("../../assets/coordinator.png") } /> }
          title={ route.params.role }
          subtitle={ route.params.locality }
        />

        <View>
          <Title align="left" level={3} color={ theme.fontColors.secondary }>
            Sobre a empresa
          </Title>
          <Paragraph align="left">
            { route.params.about }
          </Paragraph>
        </View>

        <View>
          <Title align="left" level={3} color={ theme.fontColors.secondary }>
            Perfil do profissional
          </Title>
          <Paragraph align="left">
            { route.params.profile }
          </Paragraph>
        </View>

        <View>
          <Title align="left" level={3} color={ theme.fontColors.secondary }>
            Benefícios
          </Title>
          <Paragraph align="left">
            { route.params.benefits }
          </Paragraph>
        </View>

        <View>
          <Title align="left" level={3} color={ theme.fontColors.secondary }>
            Forma de trabalho
          </Title>
          <Paragraph align="left">
            { route.params.type }
          </Paragraph>
        </View>

        <View>
          <Title align="left" level={3} color={ theme.fontColors.secondary }>
            CNPJ
          </Title>
          <Paragraph align="left">
            { route.params.cnpj }
          </Paragraph>
        </View>

        <View>
          <Title align="left" level={3} color={ theme.fontColors.secondary }>
            Contato
          </Title>
          <Paragraph align="left">
            { route.params.contact }
          </Paragraph>
        </View>

        <View>
          <Title align="left" level={3} color={ theme.fontColors.secondary }>
            Venha estagiar conosco
          </Title>
          <Paragraph align="left">
            Por gentileza, encaminhe-nos seu portfólio juntamente com seu CPF por meio do endereço de e-mail fornecido acima, a fim de agendarmos uma conversa para avaliação do seu perfil. Temos grande interesse em conhecê-lo melhor e, quem sabe, tê-lo como um possível integrante da equipe Meta.
          </Paragraph>
        </View>

        <View>
          <Title align="left" level={3} color={ theme.fontColors.secondary }>
            Localização
          </Title>
          <Paragraph align="left">
            { route.params.address }
          </Paragraph>
        </View>

        <Button behavior={ () => { navigation.navigate("ProcessSteps") } } width="100%">Me candidatar</Button>
      </Container>
    </ScrollView>
  );
}