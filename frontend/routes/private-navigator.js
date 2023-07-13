import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutInternship from "../screens/AboutInternship";
import EmpresaForm from "../screens/FormEmpresa";
import EstagioForm from "../screens/FormEstagio";
import ProcessSteps from "../screens/ProcessSteps";
import HomeEstagio from "../screens/HomeEstagio";

const Stack = createNativeStackNavigator();

export function PrivateNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeEstagio"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AboutInternship" component={AboutInternship} />
      <Stack.Screen name="FormEmpresa" component={EmpresaForm} />
      <Stack.Screen name="FormEstagio" component={EstagioForm} />
      <Stack.Screen name="ProcessSteps" component={ProcessSteps} />
      <Stack.Screen name="HomeEstagio" component={HomeEstagio} />
    </Stack.Navigator>
  );
}
