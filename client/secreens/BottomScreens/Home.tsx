import React from 'react'
import { View,StyleSheet } from 'react-native';
import { NavBar } from '../../componets/Home/NavBar';
import { Categories } from '../../componets/Home/category';
import {WelcomeText} from '../../componets/Home/WelcomeText'
export const Home = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <NavBar />
      <View style={{columnGap:10}}>
      <Categories /> 
      <WelcomeText/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  }
})
