import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BlockXperience from "../components/BlockXperience";

const XperienceScreen = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.full}> */}

      <BlockXperience
        icono={require("../assets/JS.png")}
        title={"JavaScript"}
        subtitle={"1 año de Experiencia - Freelance"}
      />

      <BlockXperience
        icono={require("../assets/JS.png")}
        title={"JavaScript"}
        subtitle={"1 año de Experiencia - Freelance"}
      />
      
      <BlockXperience
        icono={require("../assets/JS.png")}
        title={"JavaScript"}
        subtitle={"1 año de Experiencia - Freelance"}
      />
      
      <BlockXperience
        icono={require("../assets/JS.png")}
        title={"JavaScript"}
        subtitle={"1 año de Experiencia - Freelance"}
      />

      {/* </View> */}
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
    // alignItems: "baseline"
    // minWidth: "100%"
  },
  // full: {
  //   // alignItems: "stretch",
  //   // flexDirection: "row",
  //   // width: "100%",
  //   backgroundColor: "red"
  // },
  containerBlock: {
    justifyContent: "space-between",
    width: "45%",
    height: 160,
    marginTop: 10,
    backgroundColor: "#85C1E9",
    padding: 8,
    borderRadius: 10,
  },
  icono: {
    width: 60,
    height: 60,
  },
  containerInfo: {
    // backgroundColor: "white"
  },
  title: {
    fontSize: 20,
  },
  Subtitle: {
    fontSize: 15,
  },
});
