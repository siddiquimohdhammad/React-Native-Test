import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import First from './First'
import second from './Second'
import ContactContent from './ContactContent'

const Bottom=createBottomTabNavigator()

export default function BottomNavigator() {
  return (
   <Bottom.Navigator>
    <Bottom.Screen name='first' component={First} options={{
      headerShown:false,
      tabBarIcon:()=>{
        return (
          <Image source={require('../assets/naoram-sea-28HcTG9AMSE-unsplash.jpg')} style={{width:20,height:20}}/>
        )
      }
    }}/>

    <Bottom.Screen name='second' component={second} options={{
      headerShown:false,
      tabBarIcon:()=>{
        return (
          <Image source={require('../assets/naoram-sea-28HcTG9AMSE-unsplash.jpg')} style={{width:20,height:20}}/>
        )
      }
    }}/>

<Bottom.Screen name='contact' component={ContactContent} options={{
  headerShown:false,
      tabBarIcon:()=>{
        return (
          <Image source={require('../assets/naoram-sea-28HcTG9AMSE-unsplash.jpg')} style={{width:20,height:20}}/>
        )
      }
    }}/>
   </Bottom.Navigator>
  )
}