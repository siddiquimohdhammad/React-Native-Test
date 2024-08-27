import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const First = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </View>
  )
}

export default First

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: 200,
      height: 200,
      backgroundColor: 'blue',
      opacity: 0.5, // 50% transparent
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 18,
    },
  });