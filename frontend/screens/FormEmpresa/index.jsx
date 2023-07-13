import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
import InputText from '../../components/InputText/index.jsx';
import API from "../../api/";
import styles from './style.js';
import { schemaValidationEnterprise } from '../../utils/validations.js';
import { useForm } from "react-hook-form";

export default function EmpresaForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		validationSchema: schemaValidationEnterprise,
	});

	async function handleEnterprise({ name, description, cnpj, email, city, state, latitude, longitude }) {
		await API.post("enterprise", { name, description, cnpj, email, city, state, latitude, longitude });
	}


	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Adicionar dados da Empresa</Title>
			</View>

			<View>
				<InputText
					placeholderText={'Nome'}
					name="name"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.name}
				/>
				<InputText
					placeholderText={'Sobre a Empresa'}
					name="description"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.description}
				/>
				<InputText
					placeholderText={'CNPJ'}
					name="cnpj"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.cnpj}
				/>
				<InputText
					placeholderText={'Email'}
					name="email"
					control={control}
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.email}
				/>
				<InputText
					placeholderText={'Cidade'}
					name="city"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.city}
				/>
				<InputText
					placeholderText={'Estado'}
					name="state"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.state}
				/>
				<InputText
					placeholderText={'Latitude'}
					name="latitude"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.latitude}
				/>
				<InputText
					placeholderText={'Longitude'}
					name="longitude"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.longitude}
				/>
			</View>

			<View style={styles.buttons}>
				<Button behavior={handleSubmit(handleEnterprise)}>Finalizar</Button>
			</View>

			<StatusBar style="auto" />
		</View>
	);
}