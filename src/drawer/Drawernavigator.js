import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home.js'
import Contact from './Contact.js'
const Drawer=createDrawerNavigator()

const Drawernavigator = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='Home' component={Home}  />
    <Drawer.Screen name='Contact' component={Contact} />
   </Drawer.Navigator>
  )
}

export default Drawernavigator

const styles = StyleSheet.create({})