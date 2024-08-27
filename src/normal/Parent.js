import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Drawernavigator from '../drawer/Drawernavigator.js'

const Parent = () => {
  return (
    <View style={{flex:1}}>
      <Drawernavigator/>
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({})