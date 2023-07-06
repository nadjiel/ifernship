import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts } from "expo-font";

import Home from './screens/Home/index.jsx';

export default function App() {
  const [ fontsLoaded ] = useFonts({
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

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Home />

      <StatusBar style="auto" />
    </View>
  );
}