import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import login from "./screeens/login";
import Register from "./screeens/Register";
import chatScreen from "./screeens/chatScreen";
//import 'react-native-gesture-handler';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name="Login" component={login}/>
      <stack.Screen name="Register" component={Register}/>
      <stack.Screen name="Chat" component={chatScreen}/>
      
        
        
        
      </stack.Navigator>
    </NavigationContainer>
  );
}

