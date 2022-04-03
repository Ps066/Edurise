import { View, StyleSheet } from 'react-native'
import React , {useState} from 'react'
import { Input , Button} from 'react-native-elements';
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from '../firebase';

const login = ({ navigation }) => {
  const [isSignedin,setSignedIn] = useState(false);
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')

    const signin =()=>{
      signInWithEmailAndPassword(authentication,email,password)
      .then((re)=>{
        setSignedIn(true);
        navigation.navigate('Chat')
      })
      .catch((re)=>{
        console.log(re);
      })

    }
    const verified =()=>{
      if(isSignedin === true){
        navigation.navigate('chatScreen');
      }
    }

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