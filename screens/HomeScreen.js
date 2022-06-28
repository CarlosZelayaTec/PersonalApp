import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerPhoto}>
        <View style={styles.shadow}>
          <Image
            style={styles.photoProfile}
            source={require("../assets/profile.jpg")}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.fillColor}>
        <View style={styles.containerInfo}>
          <View style={styles.containerInfoOne}>
            <FontAwesome5 name="user-circle" size={30} color={"#3f90e2"} />
            <Text style={styles.info}>Carlos Jose Zelaya Baca</Text>
          </View>

          <View style={styles.containerInfoOne}>
            <FontAwesome5 name="birthday-cake" size={30} color={"#3f90e2"} />
            <Text style={styles.info}>09 de Febrero de 2001</Text>
          </View>

          <View style={styles.containerInfoOne}>
            <FontAwesome5 name="location-arrow" size={30} color={"#3f90e2"} />
            <Text style={styles.info}>San Marcos de Colón, Choluteca, Honduras</Text>
          </View>

          <View style={styles.containerInfoOne}>
            <FontAwesome5 name="phone-alt" size={30} color={"#3f90e2"} />
            <Text style={styles.info}>+504 9588-5258</Text>
          </View>

          <View style={styles.containerInfoOne}>
            <Entypo name="email" size={30} color={"#3f90e2"} />
            <Text style={styles.info}>czelayabaca@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172138",
  },
  containerPhoto: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    borderBottomRightRadius: 100,
  },
  shadow: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 11,
    elevation: 20,
  },
  photoProfile: {
    width: "65%",
    height: "85%",
    borderRadius: 160,
    shadowColor: "#000",
    borderWidth: 1.5,
  },
  fillColor: {
    flex: 1,
    backgroundColor: "white",
    // marginTop: 20
  },
  containerInfo: {
    height: "100%",
    backgroundColor: "#172138",
    borderTopLeftRadius: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderStartWidth: 5
  },
  containerInfoOne: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "green",
    justifyContent: "space-between",
    width: "72%",
  },
  info: {
    color: "#FFFFFF",
    fontSize: 21,
    width: "90%",
    // backgroundColor: "red",
    textAlign: "right"
  },
});
