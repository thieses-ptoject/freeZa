import React from 'react'
import { View,Text } from 'react-native'

export const Test = ({navigation}:any) => {
  return (
    <View>
        <Text onPress={()=>navigation.navigate("Wishlist")}> test screen</Text>
    </View>
  )
}
