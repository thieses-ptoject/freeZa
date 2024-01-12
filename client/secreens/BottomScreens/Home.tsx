import React from 'react'
import { View,StyleSheet } from 'react-native';
import { NavBar } from '../../componets/Home/NavBar';
import { Categories } from '../../componets/Home/category';
import {WelcomeText} from '../../componets/Home/WelcomeText'
import { Products } from '../../componets/Home/productsData';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const Home = ({ navigation } : any) => {
  return(
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      
      <View style={{columnGap:10}}>
      <Categories /> 
      <WelcomeText/>
      <Products/>
      </View>
    </View>
    </KeyboardAwareScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  }
})
