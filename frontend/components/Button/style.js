import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  min-width: 150px;
  padding: 16px;
  border-radius: 30px;

  background-color: #00ADB4;

  ${ ({ type }) => type == "secondary" && css`
    background-color: #9CA0A4;
  ` }

  ${ ({ type }) => type == "cancel" && css`
    background-color: #EEF1F5;
    border-width: .5px;
    border-color: #FF0000;
    box-shadow: 0px 2px 1px #000;
  ` }
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;

  color: #F2F5F9;

  ${ ({ type }) => type == "secondary" && css`
    color: #F2F5F9;
  ` }

  ${ ({ type }) => type == "cancel" && css`
    color: #252424;
  ` }
`;