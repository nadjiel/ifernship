import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
import InputText from '../../components/InputText/index.jsx';

import styles from './style.js';

export default function EstagioForm() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Adicionar dados do Estágio</Title>
			</View>

			<View>
				<InputText
					placeholderText={'Perfil do profissional'}
					name="perfilProf"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.perfilProf}
				/>
				<InputText
					placeholderText={'Perfil da vaga'}
					name="perfilVaga"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.perfilVaga}
				/>
				<InputText
					placeholderText={'Benefícios'}
					name="beneficios"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.beneficios}
				/>
				<InputText
					placeholderText={'Estilo de trabalho'}
					name="estilo"
					control={control}
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.estilo}
				/>
				<InputText
					placeholderText={'Atividade'}
					name="atividade"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.atividade}
				/>
				<InputText
					placeholderText={'Curso'}
					name="curso"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.curso}
				/>
				<InputText
					placeholderText={'Carga horária semanal'}
					name="cargaH"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.cargaH}
				/>
				<InputText
					placeholderText={'Empresa'}
					name="empresa"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.empresa}
				/>
			</View>

			<View style={styles.buttons}>
				<Button behavior={handleSubmit(handleInternship)}>
					Finalizar
				</Button>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
