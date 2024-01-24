

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomScreenTab } from "./secreens/BottomScreens/BottomScreenTab";
import { Test } from "./componets/Test";
import { StackScreens } from "./secreens/FirstScreens/StackScreens";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./appContext";
import { StripeProvider } from "@stripe/stripe-react-native";
const queryClient = new QueryClient();
import { AuthContext, AuthProvider } from "./useContext/authContext";
import { ContextPost, ProviderPost } from "./useContext/createBlog";
import { ChatContext, ChatContextProvider } from "./useContext/chatContext";
import { NotificationContextProvider } from "./useContext/notificationContext";
import { getUserData } from "./localStorage/getuser";
import { useEffect, useState } from "react";
const Stack = createStackNavigator(); 
const STRIPE_Key='pk_test_51ObgWwLDiPccFavSFtc8zJkEukmAAxX1SnCLl2UZe4y1cHUgGqcJp7CWtN4MDfg0obElh2cFmRWDwgxGZHpUO7wf00RcQlKJKJ'
export default function Context() {
  const [user,setUserConncted]=useState('')
  useEffect(()=>{
  getUserData().then((result: any) => {
    setUserConncted(result.id)})
    .catch((err)=>console.log(err.message,'gggg'))},[])
 
const handlePremium = async()=>{

}




  return ( 
      <StripeProvider publishableKey={STRIPE_Key}>
    <QueryClientProvider 
    client={queryClient}
    
    >
     
      <AuthProvider>
        <ChatContextProvider user={user}>
        <NotificationContextProvider user={user}>
        <ProviderPost>
        <App />
        </ProviderPost>
        </NotificationContextProvider>
        </ChatContextProvider>
      </AuthProvider>
     
    </QueryClientProvider>
    </StripeProvider>
  );


}


