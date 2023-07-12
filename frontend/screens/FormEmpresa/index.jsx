import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '../../components/Title/index.jsx';
import InputText from '../../components/Input/index.jsx';

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
			</View>

            <StatusBar style="auto" />
		</View>
	);
}