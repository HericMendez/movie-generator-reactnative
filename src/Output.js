import React from "react";
import { View, Text } from "react-native";
import Styles from "./styles";

const OutputMovies = (props) => {
  console.log(props.filmeObj);
  return (
    <View style={Styles.container}>
      <Text style={Styles.originalMovie}>{props.filmeObj.original}</Text>
      <Text style={Styles.jokeMovie}>{props.filmeObj.alterado}</Text>
    </View>
  );
};

export default OutputMovies;
