import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import 'react-native-gesture-handler';
import Home from '../screeens/Home';
import Mainscreen from '../screeens/MainScreen';
import Mis from '../screeens/Mis';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

import { Stacknavi } from './Stacknavi';

const Bottomtabnavigator = ({navigation}) => {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
            activeTintColor: '#00ffcc'
        }}
    >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel:"Home",
            tabBarIcon: ({ color, size })=>(
                <Icon name={Platform.OS === 'ios' ? "ios-home" : "md-home"} color={color} size={size}/>
            )
        }} />
        <Tab.Screen name="Connect" component={Mainscreen} 
            options={{
            tabBarLabel:"Connect",
            tabBarIcon: ({ color, size })=>(
                <Icon name={Platform.OS === 'ios' ? "chatbubbles" : "chatbubbles"} color={color} size={size}/>
            )
        }}
        />
        <Tab.Screen name="Mis" component={Mis} 
            options={{
            tabBarLabel:"MIS",
            tabBarIcon: ({ color, size })=>(
                <Icon name={Platform.OS === 'ios' ? "business" : "business"} color={color} size={size}/>
            )
        }}
        />
        
    </Tab.Navigator>
  )
}

export {Bottomtabnavigator} ;
/*<Tab.Screen name="Attendance" component={chat}/>*/