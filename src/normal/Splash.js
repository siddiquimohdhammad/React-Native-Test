import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            // navigation.navigate('Parent')
            navigation.reset({
              index: 0,
              routes: [{ name: 'Parent' }],
          });
        },3000);
    },[])
  return (
    // <View>

    //   <Text style={{color:'black'}}>Splash</Text>
    // </View>

    <ImageBackground source={require('../assets/naoram-sea-28HcTG9AMSE-unsplash.jpg')} style={{width:"100%",height:"100%"}}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text style={{position:'relative',fontSize:24,fontWeight:'bold',color:'black'}}>Kidoos{'\n'} and play</Text>
      </View>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({})