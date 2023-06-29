import styled, { css } from "styled-components/native";

import theme from "../../global/theme.js";

export const Text = styled.Text`
  color: ${ ({ color }) => color ? color : theme.fontColors.primary };
  text-align: ${ ({ align }) => align ? align : "center" };
  
  font-family: ${ theme.fonts.outfitBold };
  font-size: ${ theme.fontSizes.xl };

  ${ ({ level }) => level == "2" && css`
    font-family: ${ theme.fonts.poppinsSemibold };
    font-size: ${ theme.fontSizes.l };
  ` }

  ${ ({ level }) => level == "3" && css`
    font-family: ${ theme.fonts.poppinsSemibold };
    font-size: ${ theme.fontSizes.m };
  ` }

  ${ ({ font }) => font && `font-family: ${ font };` }
`;