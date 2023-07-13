import { useState } from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import styles from "./style.js";
import Card from "../../components/Card/index.jsx";
import API from "../../api";

export default function HomeEstagio({ navigation }) {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const response = await API.get("/internship");
      const internshipsData = response.data;
      setInternships(internshipsData);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPag}>Estágios Disponíveis</Text>
      <View style={styles.central}>
        <SafeAreaView>
          <FlatList
            data={internships}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 16 }}
            renderItem={({ item }) => (
              <Card
                onPress={() =>
                  //os dados n deveriam ser repassados assim, e sim recuperados pela api na outra tela, para evitar problemas de
                  navigation.navigate("AboutInternship", {
                    coordinator: true,
                    enterprise: item.empresa,
                    role: item.cargo,
                    locality: item.address,
                    about: "",
                    profile: "",
                    benefits: "",
                    type: item.estilo,
                    cnpj: "",
                    contact: "",
                    address: item.address,
                  })
                }
                //apontar para os dados corretos que vem do back
                src={item.image}
                enterprise={item.empresa}
                role={item.cargo}
                type={item.estilo}
                address={item.Local}
                hoursWeek={item.horasSemana}
              />
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
