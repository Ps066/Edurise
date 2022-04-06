import { View, Text } from 'react-native'
import React ,{useLayoutEffect ,useState, useCallback, useEffect}from 'react'
import {signOut } from "firebase/auth";
import { authentication } from '../firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat'
//import { authentication } from '../firebase';

const Mainscreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
     headerLeft:()=>(
        <View>
         <Avatar
           rounded
            source={{
              uri:authentication?.currentUser?.photoURL
            }}
         />
         </View>

     ),
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
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Mainscreen