import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const KnowledgeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>knowledgeScreen</Text>
    </View>
  )
}

export default KnowledgeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})