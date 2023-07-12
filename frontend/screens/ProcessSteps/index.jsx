import { View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import Title from "../../components/Title/index.jsx";
import Paragraph from "../../components/Paragraph/index.jsx";
import StepsCard from "../../components/StepsCard/index.jsx"

import styles from "./style.js";
import { Subtitle } from '../../components/StepsCard/style.js';

export default function Home({ navigation }) {
    const navigate = path => {
        navigation.navigate("RoleChoice", { path })
    }

    return (
        <View style={styles.container}>
            <Title>Etapas do processo de estágio</Title>

            <View style={styles.main}>
                <StepsCard> {/* Passo 1 */}
                    <Title>Passo 1</Title>
                    <Subtitle>Pesquisa e seleção da empresa de estágio.</Subtitle>
                    <Text>O primeiro passo para realizar o cadastro de estágio é encontrar uma empresa que ofereça vagas na área em que você está interessado. Isso pode ser feito por meio de pesquisas na internet, em sites de empregos ou diretamente nos sites das empresas. É importante avaliar a reputação da empresa, sua cultura organizacional, oportunidades de crescimento e desenvolvimento profissional antes de se candidatar a uma vaga. Dessa forma, você aumenta suas chances de conseguir um estágio que contribua para o seu crescimento profissional.</Text>
                </StepsCard>

                <StepsCard> {/* Passo 2 */}
                    <Title>Passo 2</Title>
                    <Subtitle>Verificação dos requisitos para cadastro de estágio</Subtitle>
                    <Text>Antes de realizar o cadastro de estágio, é importante verificar se você atende aos requisitos estabelecidos pela empresa. Esses requisitos podem variar de acordo com a área de atuação e o perfil da vaga. Além disso, é necessário possuir os documentos necessários para realizar o cadastro, como RG, CPF, comprovante de residência e declaração de matrícula. Verificar essas informações com antecedência ajuda a evitar problemas no momento da inscrição.</Text>
                </StepsCard>

                <StepsCard> {/* Passo 3 */}
                    <Title>Passo 3</Title>
                    <Subtitle>Realização do cadastro de estágio</Subtitle>
                    <Text>O processo de cadastro de estágio varia de empresa para empresa, mas geralmente é feito por meio de um formulário online. É importante preencher o formulário com atenção e fornecer todas as informações solicitadas, como dados pessoais, acadêmicos e profissionais. Além disso, é necessário anexar os documentos necessários para a inscrição, como RG, CPF, comprovante de residência e declaração de matrícula. Antes de enviar o formulário, é importante conferir as informações para evitar erros.</Text>
                </StepsCard>

                <StepsCard> {/* Passo 4 */}
                    <Title>Passo 4</Title>
                    <Subtitle>Resolução dos trâmites legais junto à coordenação de estágio da instituição</Subtitle>
                    <Text>Após ser selecionado para o estágio, é necessário resolver os trâmites legais junto à coordenação de estágio da instituição. É importante verificar quais são os documentos necessários para formalização do estágio, como convênios, termos de compromisso, seguros obrigatórios, entre outros. Essa documentação deve ser entregue na coordenação de estágio dentro dos prazos estabelecidos. A formalização do estágio só acontecerá após a confirmação da coordenação de estágio e início das atividades só poderá ocorrer após a formalização.</Text>
                </StepsCard>

                <Title>Documentação e Trâmites Legais de Estágio</Title>
                <Paragraph>
                    O estágio é uma atividade regulamentada por lei e, por isso, é necessário seguir uma série de trâmites legais para que ele seja formalizado. A seguir, serão descritos os principais documentos e trâmites legais de estágio:
                </Paragraph>
            </View>

            <Title>Documentação e trâmites legais de estágio</Title>

            <View>
                <AntDesign name="checkcircleo" size={24} color="#73D13D" />
                <Paragraph>Convênios</Paragraph>
            </View>
            <View>
                <AntDesign name="checkcircleo" size={24} color="#73D13D" />
                <Paragraph>Termo de compromisso de Estágio</Paragraph>
            </View>
            <View>
                <AntDesign name="checkcircleo" size={24} color="#73D13D" />
                <Paragraph>Seguros obrigatórios</Paragraph>
            </View>
            <View>
                <AntDesign name="checkcircleo" size={24} color="#73D13D" />
                <Paragraph>Declaração de matrícula</Paragraph>
            </View>
            <View>
                <AntDesign name="checkcircleo" size={24} color="#73D13D" />
                <Paragraph>Registro do estágio</Paragraph>
            </View>
            <View>
                <AntDesign name="checkcircleo" size={24} color="#73D13D" />
                <Paragraph>Declaração da empresa</Paragraph>
            </View>

        </View>
    );
}