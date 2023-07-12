import { Container, Title } from "./style.js";

export default function RoleButton({ behavior, icon, children }) {
  return (
    <Container onPress={ behavior }>
      { icon }
      <Title>{ children }</Title>
    </Container>
  );
}