

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
const Stack = createStackNavigator();
export default function Context() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProviderPost>
        <App />
        </ProviderPost>
      </AuthProvider>
    </QueryClientProvider>
  );
}