import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import InputSection from "./src/Input";
import { Text } from "@react-native-material/core";

import Styles from "./src/styles";

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.title}>Gerador de Filme Aleatório</Text>
      <Text style={Styles.subTitle}>
        Digite uma palavra para substituir parte de um título aleatório de filme
        (ou qualquer outra categoria de obra de entretenimento) - e veja o
        resultado!
      </Text>

      <InputSection />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
