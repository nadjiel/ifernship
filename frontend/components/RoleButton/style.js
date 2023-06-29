import styled, { css } from "styled-components/native";

import theme from "../../global/theme.js";

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 150px;
  height: 150px;
  background-color: ${ theme.colors.thirdiary };
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, .25);
`;

export const Title = styled.Text`
  color: ${ theme.fontColors.primary };
  font-family: ${ theme.fonts.outfitLight };
  font-size: ${ theme.fontSizes.s };
`;