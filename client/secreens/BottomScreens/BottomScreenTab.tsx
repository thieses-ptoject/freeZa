import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavBar } from '../../componets/Home/NavBar';
import { Home } from './Home';
import { Chat } from './Chat';
import CreateItem from './CreateItem';
import Wishlist from './Wishlist';
import Account from './Account';
import { StyleSheet, View, Text } from 'react-native';
import { ChatContext } from '../../useContext/chatContext';

const Tab = createBottomTabNavigator();

export const BottomScreenTab = ({ navigation }: any) => {
  const { onlineUsers, notifications,fetchNotifications } = useContext(ChatContext)
  // Mockup: Replace this with the actual number of messages
  const numberOfMessages = notifications.length;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'CreateItem') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName || 'person'} size={35} color={color} />;
        },

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#FC5A8D',
        tabBarStyle: { backgroundColor: '#FFECF6' },
        tabBarBadge:
          route.name === 'Chat' && numberOfMessages > 0 ? numberOfMessages : undefined,
        tabBarBadgeStyle: {
          backgroundColor: 'red',
          position: 'absolute',
          top: 5,
          right: 5,
          padding: 2,
          borderRadius: 10,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: true,
          header: () => <NavBar navigation={navigation} />,
          headerStyle: { width: '100%', height: 5 },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Chat"
        options={{ headerShown: false }}
        component={Chat}
      />
      <Tab.Screen
        name="CreateItem"
        options={{
          headerShown: true,
          header: () => <NavBar navigation={navigation} />,
          headerStyle: { width: '100%' },
        }}
        component={CreateItem}
      />
      <Tab.Screen name="Wishlist"
        options={{
          headerShown: true,
          header: () => <NavBar navigation={navigation} />,
          headerStyle: { width: '100%' },
        }}
        component={Wishlist}
      />
      <Tab.Screen name="Account" options={{ headerShown: true }} component={Account} />
    </Tab.Navigator>
  );
};