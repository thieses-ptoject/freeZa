import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './Welcome';
import { SignUp } from './Signup'
const Stack = createStackNavigator();
export const StackScreens = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='welcome' options={{headerShown:false}} component={Welcome}/>
        <Stack.Screen name='signup' options={{headerShown:false}} component={SignUp}/>
    </Stack.Navigator>
  )
}
