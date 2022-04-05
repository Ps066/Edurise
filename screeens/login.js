import { View, StyleSheet } from 'react-native'
import React , {useEffect, useState} from 'react'
import { Input , Button} from 'react-native-elements';
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from '../firebase';
import {  onAuthStateChanged } from "firebase/auth";

const login = ({ navigation }) => {
  const [isSignedin,setSignedIn] = useState(false);
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    //useEffect(()=>{
      //effect 
      //const unsubscribe = onAuthStateChanged(authentication, (user) => {
        //if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //navigation.replace('Main');
          //const uid = user.uid;
          // ...
       // } else {
          // User is signed out
          // ...
        //}
      //});

      //return unsubscribe
      
    //})

    const signin =()=>{
      signInWithEmailAndPassword(authentication,email,password)
      .then((userCredential)=>{
        setSignedIn(true);
        const user = userCredential.user;
        navigation.navigate('Main')
      })
      .catch((error)=>{
        const errorMessage = error.message;
        alert(errorMessage);
        //console.log(re);
      })

    }
    //const verified =()=>{
      //if(isSignedin === true){
        //navigation.navigate('chatScreen');
     // }
    //}

  return (
    <View style={styles.container}>
      <Input
          placeholder="Enter your email"
          label="Email"
          leftIcon={{ type:'material', name:'email'}}
          value={email}
          onChangeText={text => setEmail(text)}


      />
       <Input
          placeholder="Enter your password"
          label="Password"
          leftIcon={{ type:'material', name:'lock'}}
          value={password}
          onChangeText={text => setpassword(text)}
          secureTextEntry


      />
      <Button title="Sign in" style={styles.button} onPress={signin} />
      <Button title="Register" style={styles.button} onPress={()=>navigation.navigate('Register')}/>

      
    </View>
    
  )
}

export default login
const styles =StyleSheet.create({
    button:{
        width:300,
        marginTop:10
    },
    container:{
        flex:1,
        alignItems:'center',
        padding:10 
    }
})