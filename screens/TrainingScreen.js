import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const TrainingScreen = () => {
  return (
    <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false} >
      <View style={styles.containerBlock}>
        <View style={styles.containerTitle}>
          <FontAwesome5 name="graduation-cap" size={30} color={"#FFF"} />
          <Text style={styles.title}>Educación Primaria</Text>
        </View>

        <View style={styles.containerInfo}>
          <Image style={styles.icon} source={require("../assets/ESamaritano.jpg")} />
          <View style={styles.containerTitles}>
            <Text style={styles.titleSchool}>
              Escuela Bautista El Buen Samaritano
            </Text>
            <Text style={styles.titlePlace}>
              San Marcos de Colón, Choluteca
            </Text>
            <Text style={styles.titleYear}>2006 - 2011</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerBlock}>
        <View style={styles.containerTitle}>
          <FontAwesome5 name="graduation-cap" size={30} color={"#FFF"} />
          <Text style={styles.title}>Educación Secundaria</Text>
        </View>

        <View style={styles.containerInfo}>
          <Image style={styles.icon} source={require("../assets/ISamaritano.jpg")} />
          <View style={styles.containerTitles}>
            <Text style={styles.titleSchool}>
              Instituto Bautista El Buen Samaritano
            </Text>
            <Text style={styles.titleTitle}>
              Bachiller Técnico Profesional en Informática
            </Text>
            <Text style={styles.titlePlace}>
              San Marcos de Colón, Choluteca
            </Text>
            <Text style={styles.titleYear}>2012 - 2017</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerBlock}>
        <View style={styles.containerTitle}>
          <FontAwesome5 name="book" size={30} color={"#FFF"} />
          <Text style={styles.title}>Educación Alto Nivel</Text>
        </View>

        <View style={styles.containerInfo}>
          <Image style={styles.icon} source={require("../assets/UTH.png")} resizeMode="cover" />
          <View style={styles.containerTitles}>
            <Text style={styles.titleSchool}>
              Universidad Tecnológica de Honduras
            </Text>
            <Text style={styles.titleTitle}>
              Pasante de la carrera de Ingeniería en Computación
            </Text>
            <Text style={styles.titlePlace}>
              Choluteca, Honduras
            </Text>
            <Text style={styles.titleYear}>2022 - Actualidad</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({
  containerScrollView: {
    flex: 1,
    backgroundColor: "#FFF",
    // width: "100%"
  },
  containerBlock: {
    marginVertical: 15
    // flex: 1,
    // backgroundColor: "#FFF",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#172138",
    marginHorizontal: 5,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    marginLeft: 5,
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    backgroundColor: "#EEE",
    // backgroundColor: "#172138",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    // borderWidth: 1,
    borderRadius: 15,
  },
  icon: {
    width: 80,
    height: 80,
  },
  containerTitles: {
    width: "65%",
    alignItems: "flex-end",
  },
  titleSchool: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
    // color: "#FFF"
  },
  titleTitle: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 5,
    color: "#3f90e2"
  },
  titlePlace: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 5
    // color: "#FFF"
  },
  titleYear: {
    fontSize: 15,
    fontWeight: "200"
    // color: "#FFF",
  },
});
