import { View, Text } from 'react-native'
import React ,{useLayoutEffect}from 'react'
import {signOut } from "firebase/auth";
import { authentication } from '../firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Mainscreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:()=>(
        <TouchableOpacity styles={{
          marginRight: 30
        }} onPress={signout}>
        
        <MaterialCommunityIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
      )
    })
  

  }, [])
  const signout =()=>{
    signOut(authentication).then(() => {
      navigation.replace('Login')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <View>
      <Text>chatscreen</Text>
    </View>
  )
}

export default Mainscreen