import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
import InputText from '../../components/Input/index.jsx';

import styles from './style.js';

export default function EstagioForm() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Adicionar dados do Estágio</Title>
			</View>

            <View>
				<InputText
					placeholderText={'Perfil do Profissional'}
				/>
				<InputText placeholderText={'Perfil da vaga'} />
				<InputText placeholderText={'Benefícios'} />
				<InputText placeholderText={'Estilo de Trabalho'} />
				<InputText placeholderText={'Atividade'} />
				<InputText placeholderText={'Curso'} />
				<InputText placeholderText={'Carga Horária semanal'} />
				<InputText placeholderText={'Empresa'} />
			</View>

            <View style={styles.buttons}>
				<Button>Adicionar</Button>
			</View>

            <StatusBar style="auto" />
		</View>
	);
}