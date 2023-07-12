import { Container, Title, Subtitle } from "./style.js";

export default function AboutInternship({
  image, title, subtitle
}) {
  return (
    <Container>
      { image }
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </Container>
  );
}