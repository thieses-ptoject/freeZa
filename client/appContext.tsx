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

const queryClient = new QueryClient();
import { AuthContext, AuthProvider } from "./useContext/authContext";
const Stack = createStackNavigator();
export default function App() {
  // const [auth, setAuth] = useState(false);
  const{auth, setAuth}=useContext(AuthContext)
  useEffect(() => {
    const fetchData = async () => {
      const storage = await AsyncStorage.getItem("auth");
      console.log(storage, "storageeeeeeeee");
      console.log("triggered", auth);
      
      if (storage && storage === "true") {
        setAuth();
      }
    };
    fetchData();
  }, []);

  
  return (
    <NavigationContainer>
          {false ? (
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


