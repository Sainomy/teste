import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Button,
  StatusBar,
} from "react-native";
import * as Speech from "expo-speech";

import MeuEstilo from "./src/meuestilo";

export default class App extends React.Component {
  state = {
    valor1: 0.0, //quantidade pastel de carne
    valor2: 0.0, //quantidade de pastel de queijo
    resultado: 0.0,
    precocarne: 5.0,
    precoqueijo: 3.0,
    pasteis: 0.0,
  };

  atualizaValor1 = (number) => {
    this.setState({ valor1: number });
  };

  atualizaValor2 = (number) => {
    this.setState({ valor2: number });
  };

  somar = (valor1, valor2, resultado, precocarne, precoqueijo) => {
    resultado =
      parseFloat(valor1 * precocarne) + parseFloat(valor2 * precoqueijo);
    alert(
      "Pasteis de Carne: " +
        valor1 +
        "\n Pasteis de Queijo: " +
        valor2 +
        "\n Total: " +
        resultado
    );
  };

  render() {
    return (
      <View style={MeuEstilo.container}>
        <Text>
          Pastel de Carne R$5,00
          <TextInput
            style={MeuEstilo.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.atualizaValor1}
            keyboardType="numeric"
          />
        </Text>

        <Text>
          Pastel de Queijo R$3,00
          <TextInput
            style={MeuEstilo.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.atualizaValor2}
            keyboardType="numeric"
          />
        </Text>

        <TouchableOpacity
          style={MeuEstilo.submitButton}
          onPress={() =>
            this.somar(
              this.state.valor1,
              this.state.valor2,
              this.state.resultado,
              this.state.precocarne,
              this.state.precoqueijo,
              this.state.pasteis,
              Speech.speak(
                parseFloat(this.state.valor1 * this.state.precocarne) +
                  parseFloat(this.state.valor2 * this.state.precoqueijo)
              )
            )
          }
        >
          <Text style={MeuEstilo.submitButtonText}>Total</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
