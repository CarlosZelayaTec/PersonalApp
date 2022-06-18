import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

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
          <Text style={styles.info} >Nombre: Carlos Jose Zelaya Baca</Text>
          <Text style={styles.info} >Nacimiento: Carlos Jose Zelaya Baca</Text>
          <Text style={styles.info} >Correo electronico: Carlos Jose Zelaya Baca</Text>
          <Text style={styles.info} >N° Teléfono: Carlos Jose Zelaya Baca</Text>
          <Text style={styles.info} >Dirección: Carlos Jose Zelaya Baca</Text>
        </View>
      </View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172138',
  },
  containerPhoto: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    borderBottomRightRadius: 100,
    
  },
  shadow: {
    flex:1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.90,
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
  info: {
    color: "#FFFFFF",
    fontSize: 15
  }
});
