import { Container, Title } from "./style.js"

export default function Button({ type, icon, width, children }) {
  return (
    <Container type={ type } width={ width }>
      { icon }
      <Title type={ type }>{ children }</Title>
    </Container>
  );
}