import { Container, Title, Subtitle, Text } from './style.js';

export default function StepsCard({ title, subtitle, text, color }) {
	return (
		<Container color={color}>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Text>{text}</Text>
		</Container>
	);
}
