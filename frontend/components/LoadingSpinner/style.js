import { StyleSheet } from "react-native";

const HEIGHT = 72;

export const styles = StyleSheet.create({
  container: {
    width: HEIGHT,
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    borderRadius: HEIGHT / 2,
    borderWidth: 8,
    opacity: 0.25,
  },
  progress: {
    width: "100%",
    height: "100%",
    borderRadius: HEIGHT / 2,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderWidth: 4,
    position: "absolute",
  },
});
