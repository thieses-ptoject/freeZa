import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './Welcome';
import { SignUp } from './Signup'
const Stack = createStackNavigator();
export const StackScreens = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='welcome' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name='signup' component={SignUp}/>
    </Stack.Navigator>
  )
}
