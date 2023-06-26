import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from "react";
import * as Font from "expo-font";

import Title from "./components/Title/index.jsx";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "assistant-light": require("./assets/fonts/Assistant-Light.ttf"),
      "assistant-regular": require("./assets/fonts/Assistant-Regular.ttf"),
      "assistant-semibold": require("./assets/fonts/Assistant-SemiBold.ttf"),
      "outfit-light": require("./assets/fonts/Outfit-Light.ttf"),
      "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
      "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
      "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
      "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf")
    });
  };

  return (
    <View style={styles.container}>
      <Title>Hello, World!</Title>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
