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