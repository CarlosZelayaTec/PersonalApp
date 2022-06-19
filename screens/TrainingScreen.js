import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import BlockTraining from "../components/BlockTraining";

const TrainingScreen = () => {
  return (
    <ScrollView
      style={styles.containerScrollView}
      showsVerticalScrollIndicator={false}
    >
      
      <BlockTraining
        title={"Educación Primaria"}
        icon={require("../assets/ESamaritano.jpg")}
        titleSchool={"Escuela Bautista El Buen Samaritano"}
        titleTitle={""}
        titlePlace={"San Marcos de Colón, Choluteca"}
        titleYear={"2006 - 2011"}
        graduado={true}
      />

      <BlockTraining
        title={"Educación Secundaria"}
        icon={require("../assets/ISamaritano.jpg")}
        titleSchool={"Instituto Bautista El Buen Samaritano"}
        titleTitle={"Bachiller Técnico Profesional en Informática"}
        titlePlace={"San Marcos de Colón, Choluteca"}
        titleYear={"2012 - 2017"}
        graduado={true}
      />

      <BlockTraining
        title={"Educación Alto Nivel"}
        icon={require("../assets/UTH.png")}
        titleSchool={"Instituto Bautista El Buen Samaritano"}
        titleTitle={"Pasante de la carrera de Ingeniería en Computación"}
        titlePlace={"Choluteca, Honduras"}
        titleYear={"2022 - Actualidad"}
        graduado={false}
        />
        
        {/* <View style={styles.containerBlock}>
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
        </View> */}
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
});
