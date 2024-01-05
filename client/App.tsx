
import { StyleSheet, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomScreenTab } from './secreens/BottomScreens/BottomScreenTab';
import { Test } from './componets/Test';
import { useState } from 'react';
import { StackScreens } from './secreens/FirstScreens/StackScreens';


const Stack = createStackNavigator();
export default function App() {
  const [auth,setAuth]=useState(true)
  return (

    <NavigationContainer>
      {auth ? <Stack.Navigator >
        <Stack.Screen name="tabs" options={{headerShown:false}} component={BottomScreenTab}/>
        <Stack.Screen name="test" options={{headerShown:false}} component={Test}/>
      </Stack.Navigator> : <StackScreens />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
   
 
  },
  up : {
    width: 311.014,
    height: 367.298,
    transform: [{ rotate: '0deg' }],
    flexShrink: 0,
  }
});
