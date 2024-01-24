import { StyleSheet, Text, View } from "react-native";
import { Svg, Path } from "react-native-svg";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomScreenTab } from "./secreens/BottomScreens/BottomScreenTab";
import { Test } from "./componets/Test";
import {GeeversIfllow} from "./secreens/Acc-screens/GeeversIfllow"
import {TermAndConditions} from "./secreens/Acc-screens/TermAndConditions"
import {HelpCenter} from "./secreens/Acc-screens/HelpCenter"
import {InviteFreind} from "./secreens/Acc-screens/InviteFreind"
import {EditProfil} from "./secreens/Acc-screens/EditProfil"
import {OtheruserProfile} from "./secreens/OtherUserScreens/Prolfil"
import {ItemsDetails} from "./secreens/OtherUserScreens/ItemsDetails"
import { MySavedSearch } from "./secreens/Acc-screens/MySavedSearch";
import { useContext, useEffect, useState } from "react";
import { StackScreens } from "./secreens/FirstScreens/StackScreens";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavBlogPage } from './componets/blogPage/navBlogPage';
import BlogPage from './secreens/BottomScreens/BlogPage'; 
import { NavDetails } from "./componets/ProductDetails/Navdetails";
import { OnePost } from "./secreens/OtherUserScreens/OnePost";
import {RatingUser} from "./secreens/OtherUserScreens/Rating"


const queryClient = new QueryClient();
import { AuthContext, AuthProvider } from "./useContext/authContext";
import { ProductDetails } from "./componets/ProductDetails/ProductDetails";
import Chatscreen from "./componets/message/Chatscreen";
import { NavBar } from "./componets/Home/NavBar";
import Createappointement from "./componets/appointement/Createappointement";
import Notifications from "./componets/notifications/Notifications";
const Stack = createStackNavigator();
export default function App({navigation}: any) {
  const{isAuthenticated, setIsAuthenticated}=useContext(AuthContext)
  const [storage, setStorage] = useState(false);
  console.log(storage, "ssssssssssssssss")


  const getUserData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('user');
      
      if (savedData) {
        setIsAuthenticated(true)
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
   };  

   useEffect(() => {
    (async ()=>{

      const userData = await getUserData();
      console.log('User data:',  userData);
    })()
  }, []);
  return (
    <NavigationContainer>


          {(isAuthenticated)? (

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
          <Stack.Screen name="blog" options={{ headerShown: true , header:()=><NavBlogPage/> , headerStyle:{width:'100%'} }} component={BlogPage} />
          <Stack.Screen name="MySavedSearch" options={{headerShown: true , headerBackTitleVisible: false, title:"", headerTintColor: "#000"}}  component={MySavedSearch }/>
          <Stack.Screen name="GeeversIfllow" options={{headerShown: true , headerBackTitleVisible: false, title:"" , headerTintColor: "#000"}} component={GeeversIfllow}/>
          <Stack.Screen name="TermAndConditions" options={{headerShown: true , headerBackTitleVisible: false, title:"", headerTintColor: "#000"}}  component={TermAndConditions}/>
          <Stack.Screen name="HelpCenter" options={{headerShown: false}} component={HelpCenter}/>
          <Stack.Screen name="InviteFreind" options={{headerShown: true}} component={InviteFreind}/>
          <Stack.Screen name="EditProfil" options={{headerShown: true , headerBackTitleVisible: false, title:"", headerTintColor: "#000"}}  component={EditProfil}/>
          <Stack.Screen name="Chatscreen"   options={{headerShown: false}} component={Chatscreen}/>
          <Stack.Screen name="OtheruserProfile" options={{headerShown: true , headerBackTitleVisible: false , title:"", headerTintColor: "#000"}} component={OtheruserProfile}/>
          <Stack.Screen name="ItemsDetails" options={{headerShown: true , headerBackTitleVisible: false, title:"" , headerTintColor: "#000"}} component={ItemsDetails}/>
          <Stack.Screen name="RatingUser" options={{headerShown: true , headerBackTitleVisible: false, title:"" , headerTintColor: "#000"}}  component={RatingUser}/>
          <Stack.Screen name="Createappointement" options={{headerShown: false}} component={Createappointement}/>
          <Stack.Screen name="Notification" options={{headerShown: false}} component={Notifications}/>
          
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
