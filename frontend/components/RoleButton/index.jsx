import { Container, Title } from "./style.js";

export default function RoleButton({ icon, children }) {
  return (
    <Container>
      { icon }
      <Title>{ children }</Title>
    </Container>
  );
}