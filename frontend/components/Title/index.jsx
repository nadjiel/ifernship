import { Text } from "./style.js";

export default function Title({ level, font, color, align, children }) {
  return (
    <Text level={ level } font={ font } color={ color } align={ align }>
      { children }
    </Text>
  );
}