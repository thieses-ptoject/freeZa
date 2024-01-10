import { StyleSheet, Text, View } from "react-native";
import { Svg, Path } from "react-native-svg";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomScreenTab } from "./secreens/BottomScreens/BottomScreenTab";
import { Test } from "./componets/Test";
import { MySavedSearch } from "./secreens/Acc-screens/MySavedSearch";
import { useContext, useEffect, useState } from "react";
import { StackScreens } from "./secreens/FirstScreens/StackScreens";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavBlogPage } from './componets/blogPage/navBlogPage';
import BlogPage from './secreens/BottomScreens/BlogPage';


const queryClient = new QueryClient();
import { AuthContext, AuthProvider } from "./useContext/authContext";
const Stack = createStackNavigator();
export default function App({navigation}: any) {
  const{auth, setAuth}=useContext(AuthContext)
  const [storage, setStorage] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const storage = await AsyncStorage.getAllKeys() ;
      console.log(storage, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    };
    fetchData();
    const userData =  getUserData();
    console.log('User data:', userData);
  }, [auth]);

  const getUserData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('user');
      
      if (savedData) {
        setStorage(true
          )
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
   };  
  return (
    <NavigationContainer>
          {(auth && storage === true)? (
            <Stack.Navigator>
              <Stack.Screen
                name="tabs"
                options={{ headerShown: false }}
                component={BottomScreenTab}
              />
              <Stack.Screen
                name="test"
                options={{ headerShown: false }}
                component={Test}
              />
              <Stack.Screen name="blog" options={{ headerShown: true , header:()=><NavBlogPage navigation={navigation}/> , headerStyle:{width:'100%'} }} component={BlogPage} />
              {/* <Stack.Screen name="MySavedSearch" options={{headerShown: false}} component={MySavedSearch }/> */}
            </Stack.Navigator>
          ) : (
            <StackScreens />
          )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  up: {
    width: 311.014,
    height: 367.298,
    transform: [{ rotate: "0deg" }],
    flexShrink: 0,
  },
});


