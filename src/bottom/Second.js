import { StyleSheet, Text, View ,Box} from 'react-native'
import React from 'react'

const Second = () => {
  return (
    <View style={styles.container}>
    <View style={[{zIndex:3},styles.box]}>
      <Text style={styles.text}>1</Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.text}>2</Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.text}>3</Text>
    </View>

<View style={{zIndex:2,position:'absolute',top:10,left:50}}>
    <View style={[{},styles.box]}>
      <Text style={styles.text}>4</Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.text}>5</Text>
    </View>
</View>

  
<View style={{left:"70",bottom:50,position:'absolute'}}>

    <View style={styles.box}>
      <Text style={styles.text}>Hello</Text>
    </View>

</View>
  </View>
  )
}

export default Second


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    top:10,
    // position:'absolute',
    backgroundColor: 'blue',
    // opacity: 0.5, // 50% transparent
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});