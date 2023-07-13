import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Image, Title, Subtitle, Text, Icon } from './styles.js';

export default function Card({
	onPress,
	src,
	enterprise,
	role,
	type,
	address,
	hoursWeek,
}) {
	return (
		<Container onPress={ onPress }>
			<Image source={{ uri: src }} />

			<View>
				<Title>{enterprise}</Title>
				<Subtitle>{role}</Subtitle>
				<Text>{type}</Text>
				<Text>{address}</Text>
				<Text>{hoursWeek}</Text>
			</View>

			<Icon>
				<MaterialIcons name="touch-app" size={24} color="black" />
			</Icon>
		</Container>
	);
}
