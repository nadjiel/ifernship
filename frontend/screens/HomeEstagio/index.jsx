import { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import styles from './style.js';
import Card from '../../components/Card/index.jsx';
import API from '../../api';
import { useAuthContext } from '../../context/auth.js';
import Button from '../../components/Button/index.jsx';

export default function HomeEstagio({ navigation }) {
	const [internships, setInternships] = useState([]);

	const { logout } = useAuthContext();

	useEffect(() => {
		fetchInternships();
	}, []);

	const fetchInternships = async () => {
		try {
			const response = await API.get('/internship');
			const internshipsData = response.data;
			setInternships(internshipsData);
		} catch (ex) {
			console.log(ex);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.tituloPag}>Estágios Disponíveis</Text>
			<View style={styles.central}>
				<Button behavior={logout}>Sair</Button>
				{/* <Button behavior={ () => navigation.navigate("FormEmpresa") }>AddEmpresa</Button> */}
				<SafeAreaView>
					<FlatList
						data={internships}
						keyExtractor={(item, index) => index.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ paddingBottom: 16 }}
						renderItem={({ item }) => (
							<Card
								onPress={() =>
									//os dados n deveriam ser repassados assim, e sim recuperados pela api na outra tela, para evitar problemas de
									navigation.navigate('AboutInternship', {
										coordinator: true,
										enterprise: item.enterprise.name,
										role: item.position,
										locality: `${item.enterprise.city}, ${item.enterprise.state}`,
										about: item.enterprise.description,
										profile: item.professionalProfile,
										benefits: item.benefits,
										type: item.workModality,
										cnpj: item.enterprise.cnpj,
										contact: item.enterprise.email,
										address: `${item.enterprise.city}, ${item.enterprise.state}`,
									})
								}
								src={item.image}
								enterprise={item.enterprise.name}
								role={item.position}
								type={item.workModality}
								address={`${item.enterprise.city}, ${item.enterprise.state}`}
								hoursWeek={item.weeklyWorkload}
							/>
						)}
					/>
				</SafeAreaView>
			</View>
		</View>
	);
}
