import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home';
import { Chat } from './Chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export const BottomScreenTab = () => {

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'chat') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
     >
        <Tab.Screen name ="home" component={Home}/>
        <Tab.Screen name="chat" component={Chat}/>
        
    </Tab.Navigator>
  )
}
