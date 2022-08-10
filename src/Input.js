import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native";
import tituloFilme from "./generator";
import OutputMovies from "./Output";

import Styles from "./styles";
const InputSection = () => {
  const [text, onChangeText] = React.useState("");

  const [selected, setSelected] = React.useState("");
  const [filmeObj, setFilmeObj] = React.useState({});

  const data = [
    { key: "filmes", value: "Filmes" },
    { key: "series", value: "Séries" },
  ];

  console.log(filmeObj);
  return (
    <SafeAreaView>
      <View style={Styles.container}>
        <TextInput
          
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite uma palavra"
          placeholderTextColor="#222"
          autoCapitalize="true"
          style={Styles.input}

        />

        <SelectList
          data={data}
          setSelected={setSelected}
          boxStyles={Styles.selectBox}
          inputStyles={Styles.selectText}
          dropdownStyles={[Styles.dropdownList]}
          dropdownItemStyles={{ marginHorizontal: 20 }}
          dropdownTextStyles={Styles.dropdownText}
          maxHeight={110}
          placeholder="Selecione uma categoria"
        />
        <Pressable
          style={Styles.button}
          onPress={() => setFilmeObj(tituloFilme(text, selected))}
        >
          <Text style={Styles.buttonText}>Gerar Novo Título!</Text>
        </Pressable>
        <Text style={Styles.originalMovie}>{filmeObj.original}</Text>
        <Text style={Styles.jokeMovie}>{filmeObj.alterado}</Text>
      </View>

    </SafeAreaView>
  );
};

export default InputSection;
