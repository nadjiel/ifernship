import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
import InputText from '../../components/InputText/index.jsx';

import ImagePicker from 'react-native-image-picker';

import styles from './style.js';

export default function EmpresaForm() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Adicionar dados da Empresa</Title>
			</View>

			<View>
				<InputText placeholderText={'Nome'} />
				<InputText placeholderText={'Sobre a empresa'} />
				<InputText placeholderText={'CNPJ'} />
				<InputText placeholderText={'Email'} />
				<InputText placeholderText={'Cidade'} />
				<InputText placeholderText={'Latitude'} />
				<InputText placeholderText={'Longitude'} />
				<ImagePicker />
			</View>

			<View style={styles.buttons}>
				<Button>Finalizar</Button>
			</View>

			<StatusBar style="auto" />
		</View>
	);
}