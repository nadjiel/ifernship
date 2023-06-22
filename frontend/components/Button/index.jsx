import { Container, Title } from "./style.js"

export default function Button({ type, icon, children }) {
  return (
    <Container type={ type }>
      { icon }
      <Title type={ type }>{ children }</Title>
    </Container>
  );
}