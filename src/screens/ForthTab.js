import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ForthTab = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}/>
    </View>
  )
}

export default ForthTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        height: 40,
        backgroundColor: "blue"
    }
})