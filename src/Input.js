import React from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import tituloFilme from "./generator";

import Styles from "./styles";
const InputSection = () => {
  const [text, onChangeText] = React.useState("");

  const [selected, setSelected] = React.useState("");
  
  const data = [
    { key: "filmes", value: "Filmes" },
    { key: "series", value: "Séries" },
  ];
  console.log(tituloFilme(text, data[0].key))
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Digite uma palavra"
        onChange={(event) => console.log(event.target.value)}
      />

      <SelectList
        select
        data={data}
        setSelected={setSelected}
        boxStyles={Styles.selectBox}
        inputStyles={Styles.selectText}
        dropdownStyles={[Styles.dropdownList]}
        dropdownItemStyles={{ marginHorizontal: 20 }}
        dropdownTextStyles={Styles.dropdownText}
        maxHeight={110}
        placeholder="Selecione uma categoria"
        onChange={event=>console.log(event.target)}
      />
      <Pressable
        style={Styles.button}
        onPress={() => console.log("button pressed")}
      >
        <Text style={Styles.buttonText}>Gerar Novo Título!</Text>
      </Pressable>
    </View>
  );
};

export default InputSection;
