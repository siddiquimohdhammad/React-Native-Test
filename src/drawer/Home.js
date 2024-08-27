import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigator from '../bottom/BottomNavigator'

const Home = () => {
  return (
    <View style={{flex:1}} >
      <BottomNavigator/>
      {/* <Text style={{color:'black',justifyContent:'center',alignItems:'center'}}>Hammad</Text> */}
    </View>
  )
}

export default Home