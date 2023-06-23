import { Text } from "./style.js";

export default function Title({ level, color, align, children }) {
  return (
    <Text level={ level } color={ color } align={ align }>
      { children }
    </Text>
  );
}