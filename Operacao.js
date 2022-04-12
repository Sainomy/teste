import * as React from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Button,
  StatusBar,
} from "react-native";

import meuestilo from "./src/meuestilo";

import * as Speech from "expo-speech";

export default class App extends React.Component {
  state = {
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0,
  };

  atualizaValor1 = (number) => {
    this.setState({ valor1: number });
  };
  atualizaValor2 = (number) => {
    this.setState({ valor2: number });
  };
  soma = (valor1, valor2, resultado) => {
    resultado = parseFloat(valor1) + parseFloat(valor2);
    alert(valor1 + " + " + valor2 + " = " + resultado);
  };
  subtracao = (valor1, valor2, resultado) => {
    resultado = parseFloat(valor1) - parseFloat(valor2);
    alert(valor1 + " - " + valor2 + " = " + resultado);
  };
  multi = (valor1, valor2, resultado) => {
    resultado = parseFloat(valor1) * parseFloat(valor2);
    alert(valor1 + " * " + valor2 + " = " + resultado);
  };
  div = (valor1, valor2, resultado) => {
    resultado = parseFloat(valor1) / parseFloat(valor2);
    alert(valor1 + " / " + valor2 + " = " + resultado);
  };

  render() {
    return (
      <View style={meuestilo.conteiner}>
        <StatusBar backgroundColor="black" />
        <TextInput
          style={meuestilo.input}
          underlineColorAndroid="trasparent"
          placeholder="Digite o Valor 1"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.atualizaValor1}
          keyboardType="numeric"
        />

        <TextInput
          style={meuestilo.input}
          underlineColorAndroid="trasparent"
          placeholder="Digite o Valor 2"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.atualizaValor2}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={meuestilo.submitButton}
          onPress={() =>
            this.soma(
              this.state.valor1,
              this.state.valor2,
              Speech.speak(
                parseFloat(this.state.valor1) + parseFloat(this.state.valor2)
              )
            )
          }
        >
          <Text style={meuestilo.submitButtonText}>Somar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={meuestilo.submitButton}
          onPress={() =>
            this.subtracao(
              this.state.valor1,
              this.state.valor2,
              Speech.speak(
                parseFloat(this.state.valor1) - parseFloat(this.state.valor2)
              )
            )
          }
        >
          <Text style={meuestilo.submitButtonText}>Subtração</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={meuestilo.submitButton}
          onPress={() =>
            this.multi(
              this.state.valor1,
              this.state.valor2,
              Speech.speak(
                parseFloat(this.state.valor1) * parseFloat(this.state.valor2)
              )
            )
          }
        >
          <Text style={meuestilo.submitButtonText}>Multiplicação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={meuestilo.submitButton}
          onPress={() =>
            this.div(
              this.state.valor1,
              this.state.valor2,
              Speech.speak(
                parseFloat(this.state.valor1) / parseFloat(this.state.valor2)
              )
            )
          }
        >
          <Text style={meuestilo.submitButtonText}>Divisão</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
