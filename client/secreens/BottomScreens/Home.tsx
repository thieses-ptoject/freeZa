import React from 'react'
import { View,Text } from 'react-native'

export const Home = ({navigation}) => {
  return (
    <View>
        <Text onPress={()=>navigation.navigate('test')}>go to test screen</Text>
    </View>
  )
}
