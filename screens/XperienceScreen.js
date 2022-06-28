import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BlockXperience from "../components/BlockXperience";

const XperienceScreen = () => {
  return (
    <View style={styles.container}>

      <BlockXperience
        icono={require("../assets/JS.png")}
        title={"JavaScript"}
        subtitle={"1 año de Experiencia - Freelance"}
      />

      <BlockXperience
        icono={require("../assets/unithel.jpg")}
        title={"UNITHEL"}
        subtitle={"1 mes de Experiencia - Práctica profesional"}
      />
      
      <BlockXperience
        icono={require("../assets/tvs.jpg")}
        title={"TVS CANAL 42"}
        subtitle={"3 meses de Experiencia - Operador de cámaras y controles"}
      />
      
      <BlockXperience
        icono={require("../assets/expo.png")}
        title={"REACT NATIVE EXPO"}
        subtitle={"1 año de Experiencia - Freelance"}
      />

    </View>
  );
};

export default XperienceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#172138",
    flexWrap: "wrap",
  },
});
