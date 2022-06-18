import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const TrainingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <FontAwesome5 name="graduation-cap" size={30} />
        <Text style={styles.title}>Educación Primaria</Text>
      </View>
    </View>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});
