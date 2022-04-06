import { View, StyleSheet } from 'react-native'
import React , {useState} from 'react'
import { Input , Button} from 'react-native-elements';
//import { auth } from '../firebase';
import { authentication } from '../firebase';
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';


const Register = ({navigation}) => {
    //try signed in usestate
    const [isSignedin,setSignedIn] = useState(false);

    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [pid,setPId] = useState('')
    const [password,setPassword] = useState('')
    const [image,setImg] = useState('')
    const signup =()=>{
        createUserWithEmailAndPassword(authentication,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            setSignedIn(true);
            navigation.replace('Main');
            updateProfile(authentication.currentUser, {
                displayName: name, photoURL: image? image:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
        })
        .catch((error)=>{
            const errorMessage = error.message;
            alert(errorMessage);
        })
        navigation.popToTop();

    }
   
  return (
    <View style={styles.container}>
      <Input
          placeholder="Enter your Name"
          label="Name"
          leftIcon={{ type:'material', name:'badge'}}
          value={name}
          onChangeText={text => setName(text)}


      />
      <Input
          placeholder="Enter your Pid"
          label="PID"
          leftIcon={{ type:'material', name:'lock'}}
          value={pid}
          onChangeText={text => setPId(text)}


      />
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
          onChangeText={text => setPassword(text)}
          secureTextEntry


      />
      <Input
          placeholder="Enter your image url"
          label="Profile pic"
          leftIcon={{ type:'material', name:'face'}}
          value={image}
          onChangeText={text => setImg(text)}


      />
      
      <Button title="Register"  style={styles.button} onPress={signup} />

      
    </View>
    
  )
}

export default Register
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