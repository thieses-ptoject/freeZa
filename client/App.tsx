
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
    // <View style={styles.container}>
    //   <Svg style={styles.up} width={241} height={172} viewBox="0 0 241 172" fill="none">
    //   <Path
    //     d="M162.205 115.865C129.183 245.198 -32.9372 119.774 -55.0377 23.6511C-77.1381 -72.4717 -48.2777 -159.066 37.1762 -193.591C122.63 -228.117 192.435 -170.806 230.129 -95.4164C267.824 -20.0273 195.226 -13.4676 162.205 115.865Z"
    //     fill="#F20B32"
    //   />
    // </Svg>
      

    // </View>
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
