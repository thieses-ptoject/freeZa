
import React from 'react'
import { NavBar } from "../../componets/NavBar"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home';
import { Chat } from './Chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateItem from './CreateItem';
import Wishlist from './Wishlist';
import Account from './Account';
import { StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();

export const BottomScreenTab = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
            
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
            
          }
          else if (route.name === 'CreateItem') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          }
          else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName || 'person'} size={35} color={color} />;
        },

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#FC5A8D',
        // tabBarLabel: () => null,
        tabBarStyle: { backgroundColor: '#FFECF6'},
      })}
     >
        <Tab.Screen name ="Home" options={{headerShown:false}} component={Home}/>
        <Tab.Screen name="Chat"  options={{headerShown:false}} component={Chat}/>
        <Tab.Screen name="CreateItem"  options={{headerShown:false}} component={CreateItem}/>
        <Tab.Screen name="Wishlist"  options={{headerShown:false}} component={Wishlist}/>
        <Tab.Screen name="Account"  options={{headerShown:false}} component={Account}/> 
        
    </Tab.Navigator>
  )
}

