import { StyleSheet, Text, View, Image,  } from 'react-native'
import React from 'react';
import { FontAwesome5 } from "@expo/vector-icons";

const BlockTraining = ({ title, icon, titleSchool, titleTitle, titlePlace, titleYear, graduado }) => {
    
    return (
      <View style={styles.containerBlock}>
        <View style={styles.containerTitle}>
            {
                graduado == true ?
                    <FontAwesome5 name="graduation-cap" size={30} color={"#FFF"} />
                :
                    <FontAwesome5 name="book" size={30} color={"#FFF"} />
            }
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.containerInfo}>
          <Image style={styles.icon} source={icon} />
          <View style={styles.containerTitles}>
            <Text style={styles.titleSchool}>
                {titleSchool}
            </Text >
            { titleTitle != "" ? 
            <Text style={styles.titleTitle}>
                {titleTitle}
            </Text>:
                console.log("no hay nada")
            }
            <Text style={styles.titlePlace}>
                {titlePlace}
            </Text>
            <Text style={styles.titleYear}>{titleYear}</Text>
          </View>
        </View>
      </View>
  )
}

export default BlockTraining;

const styles = StyleSheet.create({
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
})