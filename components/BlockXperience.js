import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const BlockXperience = ({ icono, title, subtitle }) => {
  return (
    <View style={styles.containerBlock}>
      <Image style={styles.icono} source={icono} />
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.Subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default BlockXperience;

const styles = StyleSheet.create({
  containerBlock: {
    justifyContent: "space-between",
    width: "45%",
    height: 170,
    marginTop: 10,
    backgroundColor: "#85C1E9",
    padding: 8,
    borderRadius: 10,
    // borderWidth: 1
  },
  icono: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
  },
  containerInfo: {
    // backgroundColor: "white"
  },
  title: {
    fontSize: 20,
    fontWeight: "600"
  },
  Subtitle: {
    fontSize: 13,
    fontWeight: "300"
  },
});
