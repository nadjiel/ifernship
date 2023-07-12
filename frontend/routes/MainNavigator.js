import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import RoleChoice from "../screens/RoleChoice";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={ {
      headerShown: false
    } }
    >
      <Stack.Screen
        name="Home"
        component={ Home }
      />
      <Stack.Screen
        name="RoleChoice"
        component={ RoleChoice }
      />
      <Stack.Screen
        name="Login"
        component={ Login }
      />
      <Stack.Screen
        name="Signup"
        component={ Cadastro }
      />
    </Stack.Navigator>
  );
}