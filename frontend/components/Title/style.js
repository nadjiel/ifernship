import styled, { css } from "styled-components/native";

export const Text = styled.Text`
  color: ${ ({ color }) => color ? color : "#030A1D" };
  text-align: ${ ({ align }) => align ? align : "center" };

  font-size: 30px;
  font-weight: 700;

  ${ ({ level }) => level == "2" && css`
    font-size: 28px;
    font-weight: 700;
  ` }

  ${ ({ level }) => level == "3" && css`
    font-size: 20px;
    font-weight: 600;
  ` }

  ${ ({ level }) => level == "4" && css`
    font-size: 18px;
    font-weight: 600;
  ` }

  ${ ({ level }) => level == "5" && css`
    font-size: 16px;
    font-weight: 600;
  ` }
`;