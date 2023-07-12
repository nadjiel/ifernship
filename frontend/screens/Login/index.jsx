import { StatusBar } from 'expo-status-bar';
import { View, Image, TextInput } from 'react-native';

import Title from '../../components/Title/index.jsx';
import Paragraph from '../../components/Paragraph/index.jsx';
import Button from '../../components/Button/index.jsx';

import styles from './style.js';

export default function Home() {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/logo.png')}
				style={styles.logo}
			/>
			<StatusBar style="auto" />

			<View style={styles.main}>
				<Title>Bem-vindo de volta</Title>
				<Paragraph>
					Faça login e tenha acesso a um mundo de oportunidades
					profissionais com nosso aplicativo de vagas de estágio. Não
					perca mais tempo, comece agora a buscar a vaga perfeita para
					você!
				</Paragraph>
			</View>
		</View>
	);
}
