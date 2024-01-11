import React from 'react'
import { View,StyleSheet } from 'react-native';
import { NavBar } from '../../componets/Home/NavBar';
import { Categories } from '../../componets/Home/category';
import {WelcomeText} from '../../componets/Home/WelcomeText'
export const Home = ({ navigation:any }) => {
  return(
    <View style={styles.container}>
      
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
