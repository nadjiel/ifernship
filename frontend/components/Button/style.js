import styled, { css } from "styled-components/native";

import theme from "../../global/theme.js";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: ${ ({ width }) => width ? width : "150px" };
  padding: 16px;
  border-radius: 30px;
  box-shadow: 0px 2px 1px #000;

  background-color: ${ theme.colors.primary };

  ${ ({ type }) => type == "faded" && css`
    background-color: ${ theme.colors.faded };
  ` }

  ${ ({ type }) => type == "cancel" && css`
    background-color: ${ theme.colors.faded };
    border-width: .5px;
    border-color: ${ theme.colors.cancel };
  ` }
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${ theme.fontSizes.l };
  font-family: ${ theme.fonts.outfitBold };

  color: ${ theme.fontColors.thirdiary };

  ${ ({ type }) => type == "faded" && css`
    color: ${ theme.fontColors.thirdiary };
  ` }

  ${ ({ type }) => type == "cancel" && css`
    color: ${ theme.fontColors.primary };
  ` }
`;