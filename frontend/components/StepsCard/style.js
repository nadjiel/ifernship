import styled from 'styled-components/native';

export const Container = styled.Pressable`
	width: 350px;
	height: 255px;
	margin: 10px;
	background-color: ${({ color }) => (color ? color : '#f3f3f3')};
	padding: 30px;
	border-radius: 20px;
	background-color: #f3f3f3;
`;

export const Title = styled.Text`
	text-align: left;
	margin-top: 5px;
	padding-left: 10px;
	font-size: 22px;
	font-weight: bold;
`;

export const Subtitle = styled.Text`
	text-align: left;
	margin-top: -3px;
	padding-left: 10px;
	font-size: 16px;
	color: #323131;
	font-weight: bold;
`;

export const Text = styled.Text`
	text-align: left;
	margin-top: 6px;
	padding-left: 10px;
	font-size: 16px;
	color: #0c0c0c;
`;
