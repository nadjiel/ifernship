import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import RoleChoice from "../screens/RoleChoice";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import AboutInternship from "../screens/AboutInternship";
import EmpresaForm from "../screens/FormEmpresa";
import EstagioForm from "../screens/FormEstagio";
import ProcessSteps from "../screens/ProcessSteps";
import HomeEstagio from "../screens/HomeEstagio";

const Stack = createNativeStackNavigator();

export function PublicNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RoleChoice" component={RoleChoice} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Cadastro} />
      <Stack.Screen name="AboutInternship" component={AboutInternship} />
      <Stack.Screen name="FormEmpresa" component={EmpresaForm} />
      <Stack.Screen name="FormEstagio" component={EstagioForm} />
      <Stack.Screen name="ProcessSteps" component={ProcessSteps} />
      <Stack.Screen name="HomeEstagio" component={HomeEstagio} />
    </Stack.Navigator>
  );
}
