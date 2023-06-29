import { Text } from "./style.js";

export default function Paragraph({ size, font, color, align, children }) {
  return (
    <Text size={ size } font={ font } color={ color } align={ align }>
      { children }
    </Text>
  );
}