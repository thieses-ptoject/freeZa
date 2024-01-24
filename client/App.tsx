

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomScreenTab } from "./secreens/BottomScreens/BottomScreenTab";
import { Test } from "./componets/Test";
import { StackScreens } from "./secreens/FirstScreens/StackScreens";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./appContext";

const queryClient = new QueryClient();
import { AuthContext, AuthProvider } from "./useContext/authContext";
import { ContextPost, ProviderPost } from "./useContext/createBlog";
import { ChatContext, ChatContextProvider } from "./useContext/chatContext";
import { NotificationContextProvider } from "./useContext/notificationContext";
import { getUserData } from "./localStorage/getuser";
import { useEffect, useState } from "react";
const Stack = createStackNavigator();
export default function Context() {
  const [user,setUserConncted]=useState('')
  useEffect(()=>{
  getUserData().then((result: any) => {
    setUserConncted(result.id)})
    .catch((err)=>console.log(err.message,'gggg'))},[])

  return (
    <QueryClientProvider client={queryClient}>
     
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
  );


}


