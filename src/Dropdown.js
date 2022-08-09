import React from "react";
import { View, Text } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import Styles from "./styles";

const Dropdown = () => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Filmes" },
    { key: "2", value: "Séries" },
  ];

  return (
    <View style={Styles.container}>
    
    </View>
  );
};

export default Dropdown;
