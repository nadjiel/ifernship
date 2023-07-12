import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${ theme.fonts.poppinsMedium };
  font-size: ${ theme.fontSizes.l };
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-family: ${ theme.fonts.poppinsRegular };
  font-size: ${ theme.fontSizes.s };
  text-align: center;
`;