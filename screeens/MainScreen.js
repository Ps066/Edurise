import { View, Text } from 'react-native'
import React ,{useLayoutEffect ,useState, useCallback, useEffect}from 'react'
import {signOut } from "firebase/auth";
import { authentication } from '../firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat'
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 


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
    const {
      _id,
      createdAt,
      text,
      user
    }= messages[0]
   // try {
     // const docRef = await addDoc(collection(db, "chats"), {
       // _id,
       // createdAt,
        //text,
        //user
     // });
     // console.log("Document written with ID: ", docRef.id);
   // } catch (e) {
      //console.error("Error adding document: ", e);
   // }
    
  }, [])
  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: authentication?.currentUser?.email,
        name:authentication?.currentUser?.displayName,
        avatar: authentication?.currentUser?.photoURL
      }}
    />
  )
}

export default Mainscreen