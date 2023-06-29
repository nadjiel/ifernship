import styled, { css } from "styled-components/native";

import theme from "../../global/theme.js";

export const Text = styled.Text`
  color: ${ ({ color }) => color ? color : theme.fontColors.primary };
  font-family: ${ ({ font }) => font ? font : theme.fonts.outfitLight };
  font-size: ${ ({ size }) => size ? size : theme.fontSizes.s };
  text-align: ${ ({ align }) => align ? align : "center" };
`;