
import { StyleSheet, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomScreenTab } from './secreens/BottomScreens/BottomScreenTab';
import { Test } from './componets/Test';
import {MySavedSearch} from "./secreens/Acc-screens/MySavedSearch"
import { useState } from 'react';
import { StackScreens } from './secreens/FirstScreens/StackScreens';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();


const Stack = createStackNavigator();
export default function App() {
  const [auth,setAuth]=useState(false)
  return (

    <NavigationContainer>
      <QueryClientProvider client={queryClient}>


        {auth ? <Stack.Navigator >
          <Stack.Screen name="tabs" options={{ headerShown: false }} component={BottomScreenTab} />
          <Stack.Screen name="test" options={{ headerShown: false }} component={Test} />
          {/* <Stack.Screen name="MySavedSearch" options={{headerShown: false}} component={MySavedSearch }/> */}
        </Stack.Navigator> : <StackScreens />}
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',


  },
  up: {
    width: 311.014,
    height: 367.298,
    transform: [{ rotate: '0deg' }],
    flexShrink: 0,
  }
});
