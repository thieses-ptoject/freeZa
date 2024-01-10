
import { StyleSheet, Text, View,Alert } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomScreenTab } from './secreens/BottomScreens/BottomScreenTab';
import { Test } from './componets/Test';
import { useState } from 'react';
import { StackScreens } from './secreens/FirstScreens/StackScreens';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BlogPage from './secreens/BottomScreens/BlogPage';
import { NavBar } from './componets/Home/NavBar';
import { NavBlogPage } from './componets/blogPage/navBlogPage';

const queryClient = new QueryClient();


const Stack = createStackNavigator();
export default function App({navigation}:any) {
 
  const [auth, setAuth] = useState(true)
  return (

    <NavigationContainer>
      <QueryClientProvider client={queryClient}>


        {auth ? <Stack.Navigator >
          <Stack.Screen name="tabs" options={{ headerShown: false }} component={BottomScreenTab} />
          <Stack.Screen name="test" options={{ headerShown: false }} component={Test} />
          <Stack.Screen name="blog" options={{ headerShown: true , header:()=><NavBlogPage/> , headerStyle:{width:'100%'} }} component={BlogPage} />
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
