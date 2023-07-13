import styled from "styled-components/native";
import theme from "../../global/theme";

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 25px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditButton = styled.TouchableOpacity`
  border-color: ${ theme.colors.secondary };
  border-width: 2px;
  border-style: solid;
  border-radius: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;