import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './Welcome';
import { Signup } from './Signup';
import { CompleteSignUp } from './completeSignUp';
import Login from './Login';
import Password from './Password';
const Stack = createStackNavigator();
export const StackScreens = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='welcome' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name='signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='completeSignUp' component={CompleteSignUp} options={{headerShown:false}}/>
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='password' component={Password} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
