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
    maxWidth: "45%",
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
