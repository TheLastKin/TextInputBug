import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SecondTab = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} autoFocus/>
    </View>
  )
}

export default SecondTab

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