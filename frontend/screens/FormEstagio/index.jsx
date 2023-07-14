import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
import InputText from '../../components/InputText/index.jsx';
import API from '../../api/';
import styles from './style.js';
import { schemaValidationInternship } from '../../utils/validations.js';
import { useForm } from 'react-hook-form';

export default function EstagioForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		validationSchema: schemaValidationInternship,
	});

	async function handleInternship({
		professionalProfile,
		jobProfile,
		benefits,
		workModality,
		activity,
		weeklyWorkload,
		enterprise,
		position
	}) {
		await API.post('internship', {
			professionalProfile,
			jobProfile,
			benefits,
			workModality,
			activity,
			weeklyWorkload,
			enterprise,
			position
		});
	}

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Adicionar dados do Estágio</Title>
			</View>

			<View>
				<InputText
					placeholderText={'Perfil do profissional'}
					name="professionalProfile"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.professionalProfile}
				/>
				<InputText
					placeholderText={'Perfil da vaga'}
					name="jobProfile"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.jobProfile}
				/>
				<InputText
					placeholderText={'Benefícios'}
					name="benefits"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.benefits}
				/>
				<InputText
					placeholderText={'Estilo de trabalho'}
					name="workModality"
					control={control}
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.workModality}
				/>
				<InputText
					placeholderText={'Atividade'}
					name="activity"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.activity}
				/>
				<InputText
					placeholderText={'Cargo'}
					name="position"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.position}
				/>
				<InputText
					placeholderText={'Carga horária semanal'}
					name="weeklyWorkload"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.weeklyWorkload}
				/>
				<InputText
					placeholderText={'Empresa'}
					name="enterprise"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.enterprise}
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
