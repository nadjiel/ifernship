import { StatusBar } from 'expo-status-bar';
import { View, Image, TextInput } from 'react-native';

import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
import InputText from '../../components/InputText/index.jsx';

import styles from './style.js';
import { schemaValidationRegister } from '../../utils/validations.js';

export default function Cadastro({ navigation }) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		validationSchema: schemaValidationRegister,
	});

	async function handleRegister({
		name,
		email,
		password,
		confirmPassword,
		course,
		type,
	}) {
		try {
			await register(
				name,
				email,
				password,
				confirmPassword,
				course,
				type
			);
		} catch (ex) {
			console.log(ex);
		}
	}

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
				<InputText
					placeholderText={'Nome'}
					name="name"
					control={control}
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.name}
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
					placeholderText={'Senha'}
					name="password"
					control={control}
					secureTextEntryText={true}
					error={errors.password}
				/>
				<InputText
					placeholderText={'Confirmar Senha'}
					name="confirmPassword"
					control={control}
					secureTextEntryText={true}
					error={errors.confirmPassword}
				/>
				<InputText
					placeholderText={'Curso'}
					name="course"
					control={control}
					autoCorrect={false}
					autoCapitalize="none"
					error={errors.course}
				/>

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
				<Button
					type="faded"
					behavior={() => {
						navigation.navigate();
					}}
				>
					Cadastrar
				</Button>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
