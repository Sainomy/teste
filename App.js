import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import MinhaLista from "./Lista";
import MinhaPastelaria from "./Pastelaria";
import MinhaOperacao from "./Operacao";

function OperacaoScreen({ navigation }) {
  return <MinhaOperacao></MinhaOperacao>;
}

function PastelariaScreen({ navigation }) {
  return <MinhaPastelaria></MinhaPastelaria>;
}

function ListaScreen({ navigation }) {
  return <MinhaLista></MinhaLista>;
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="FlatList" component={ListaScreen} />
        <Drawer.Screen
          name="Operações Matemáticas"
          component={OperacaoScreen}
        />
        <Drawer.Screen name="Pastelaria" component={PastelariaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
