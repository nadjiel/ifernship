import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';

import Title from '../../components/Title/index.jsx';
import Paragraph from '../../components/Paragraph/index.jsx';
import Button from '../../components/Button/index.jsx';

import styles from './style.js';

export default function Home() {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/logo.png')}
				style={styles.logo}
			/>
			<StatusBar style="auto" />
		</View>
	);
}
