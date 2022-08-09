import React from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import SelectList from "react-native-dropdown-select-list";

import Styles from "./styles";
const InputSection = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const categories = ["Filmes", "Séries"];
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Filmes" },
    { key: "2", value: "Séries" },
  ];
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Digite uma palavra"
      />

      <SelectList
        data={data}
        setSelected={setSelected}
        boxStyles={Styles.selectBox}
        inputStyles={Styles.selectText}
        dropdownStyles={[Styles.dropdownList]}
        dropdownItemStyles={{ marginHorizontal: 20 }}
        dropdownTextStyles={Styles.dropdownText}
        placeholder="Selecione uma categoria"
      />
      <Pressable style={Styles.button} onPress={()=>console.log("button pressed")}>
        <Text style={Styles.buttonText}>Teste</Text>
      </Pressable>
    </View>
  );
};

export default InputSection;
