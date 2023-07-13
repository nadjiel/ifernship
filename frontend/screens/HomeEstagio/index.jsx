import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import styles from './style.js';
import Card from '../../components/Card/index.jsx';

export default function Home() {
	const services = [
		{
			id: '1',
			image: 'https://www.apple.com/careers/images/fy22-og-refresh/work_at_apple_OG/desktop.png',
			empresa: 'Apple',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '2',
			image: 'https://www.centralxbox.com.br/wp-content/uploads/2020/02/microsoft-gdc-2020.jpg',
			empresa: 'Microsoft',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '3',
			image: 'https://www.imobzi.com/papoimobiliario/wp-content/uploads/2022/12/meta-verso.png',
			empresa: 'Meta',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '4',
			image: 'https://www.centralxbox.com.br/wp-content/uploads/2020/02/microsoft-gdc-2020.jpg',
			empresa: 'Samsung',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '5',
			image: 'https://www.centralxbox.com.br/wp-content/uploads/2020/02/microsoft-gdc-2020.jpg',
			empresa: 'Tecent',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '6',
			image: 'https://www.centralxbox.com.br/wp-content/uploads/2020/02/microsoft-gdc-2020.jpg',
			empresa: 'Tecent',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
	];

	return (
		<View style={styles.container}>
			<Text style={styles.tituloPag}>Estágios Disponíveis</Text>
			<View style={styles.central}>
				<SafeAreaView>
					<FlatList
						data={services}
						keyExtractor={(item, index) => index.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ paddingBottom: 16 }}
						renderItem={({ item }) => (
							<Card
								src={item.image}
								enterprise={item.empresa}
								role={item.cargo}
								type={item.estilo}
								address={item.Local}
								hoursWeek={item.horasSemana}
							/>
						)}
					/>
				</SafeAreaView>
			</View>
		</View>
	);
}
