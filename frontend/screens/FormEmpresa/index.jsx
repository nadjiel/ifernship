import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
import InputText from '../../components/InputText/index.jsx';
import API from "../../api/";
import ImagePicker from 'react-native-image-picker';
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

	async function handleEnterprise({ name, description, cnpj, email, city, latitude, longitude }) {
		try {
			await API.post("enterprise", { name, description, cnpj, email, city, latitude, longitude });
		} catch (ex) {
			console.log(ex);
		}
	}


	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Adicionar dados da Empresa</Title>
			</View>

			<View>
				<InputText
					placeholderText={'Nome'}
					nome="name"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.name}
				/>
				<InputText
					placeholderText={'Sobre a Empresa'}
					nome="description"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.description}
				/>
				<InputText
					placeholderText={'CNPJ'}
					nome="cnpj"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.cnpj}
				/>
				<InputText
					placeholderText={'Email'}
					nome="email"
					control={control}
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.email}
				/>
				<InputText
					placeholderText={'Cidade'}
					nome="city"
					control={control}
					keyboardType="text"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.city}
				/>
				<InputText
					placeholderText={'Latitude'}
					nome="latitude"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.latitude}
				/>
				<InputText
					placeholderText={'Longitude'}
					nome="longitude"
					control={control}
					keyboardType="number"
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.longitude}
				/>
				<ImagePicker />
			</View>

			<View style={styles.buttons}>
				<Button behavior={handleSubmit(handleEnterprise)}>Finalizar</Button>
			</View>

			<StatusBar style="auto" />
		</View>
	);
}