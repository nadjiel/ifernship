import { Container, Title } from "./style.js"

export default function Button({ behavior, type, icon, width, children }) {
  return (
    <Container onPress={ behavior } type={ type } width={ width }>
      { icon }
      <Title type={ type }>{ children }</Title>
    </Container>
  );
}