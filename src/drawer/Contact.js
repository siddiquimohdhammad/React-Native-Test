import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigator from '../bottom/BottomNavigator'
import ContactContent from '../bottom/ContactContent'

const Contact = () => {
  return (
    <View style={{flex:1}} >
    <BottomNavigator/>
    {/* <Text style={{color:'black',justifyContent:'center',alignItems:'center'}}>Hammad</Text> */}
  </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container:{
    // flex:1,
    // justifyContent:'center',
    alignItems:'center'
  },
  headTxt:{
    color:'black',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    padding:10,
    fontSize:25
  }
})