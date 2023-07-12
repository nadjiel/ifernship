import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '../../components/Title/index.jsx';
import styles from './style.js';

export default function EmpresaForm() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Adicionar dados da Empresa</Title>
			</View>
            <StatusBar style="auto" />
		</View>
	);
}