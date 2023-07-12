import { StatusBar } from 'expo-status-bar';
import { View, Image, TextInput } from 'react-native';

import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
import InputText from '../../components/Input/index.jsx';

import styles from './style.js';

export default function Cadastro() {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/logo.png')}
				style={styles.logo}
			/>
			<View style={styles.main}>
				<Title>Cadastre-se agora mesmo!</Title>
			</View>

			<View>
				<InputText placeholderText={'Nome'} />
				<InputText placeholderText={'Curso'} />
				<InputText
					placeholderText={'Email'}
					keyboardTypeText={'email-address'}
				/>
				<InputText
					placeholderText={'Senha'}
					secureTextEntryText={true}
				/>
				<InputText
					placeholderText={'Confirmar Senha'}
					secureTextEntryText={true}
				/>
			</View>

			<View style={styles.buttons}>
				<Button type="faded">Cadastrar</Button>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
