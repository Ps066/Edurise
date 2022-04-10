import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import login from "./screeens/login";
import Register from "./screeens/Register";
import MainScreen from "./screeens/MainScreen";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Stacknavi } from "./Navigator/Stacknavi";
import { Bottomtabnavigator } from "./Navigator/bottomtabnavigator";


const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     
     <Stacknavi />
     
     
      
    </NavigationContainer>
  );
}
/* export  function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen}/>
      <Tab.Screen name="Home" component={login} />
      <Tab.Screen name="Settings" component={Register} />
    </Tab.Navigator>
  );


   <stack.Navigator>
      
      <stack.Screen name="Login" component={login}/>
     
      
      <stack.Screen name="Register" component={Register}/>
      
      <stack.Screen name="Main" component={MainScreen}/>
        
        
        
      </stack.Navigator>




}*/
