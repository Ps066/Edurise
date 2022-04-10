import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import login from '../screeens/login';
import Register from "../screeens/Register";
import MainScreen from "../screeens/MainScreen";
import 'react-native-gesture-handler';
import Home from '../screeens/Home';

import { Bottomtabnavigator } from './bottomtabnavigator';

const stack = createStackNavigator();

const Stacknavi = () => {
  return (
    
    <stack.Navigator>
    
    <stack.Screen name="Login" component={login}/>
   
    
    <stack.Screen name="Register" component={Register}/>
    
    <stack.Screen name="Main" component={Bottomtabnavigator} options={{headerShown: false}} />
      
      
      
    </stack.Navigator>
    
  
  )
}

/*const chat =()=>{
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={Home}/>
        </stack.Navigator>
    )
}*/

export { Stacknavi };
//export { chat };