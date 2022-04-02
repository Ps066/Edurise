import { View, StyleSheet } from 'react-native'
import React , {useState} from 'react'
import { Input , Button} from 'react-native-elements';

const Register = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [pid,setPId] = useState('')
    const [password,setPassword] = useState('')
    const [image,setImg] = useState('')
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
      
      <Button title="Register" style={styles.button}/>

      
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