import React, { useState } from 'react'
import { View,Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CommentLike = () => {
  const [color,setColor]=useState(true)
  const  [commented,setCommented]=useState(true)
  return (
    <View style={{flexDirection:'row'}}>
    <View style={{flexDirection:'row'}}>
    {color?<Ionicons name={'heart-outline'} size={20} color={'red'} />:
    <Ionicons name={'heart'} size={20} color={'red'} />}
    <Text>1</Text>
    </View>
    <View style={{flexDirection:'row'}}>
    {color?<MaterialCommunityIcons name={'comment-account-outline'} size={20} color={'black'} />:
    <MaterialCommunityIcons name={'comment-account'} size={20} color={'black'} />}
    <Text>1</Text>
    </View>
   </View>
  )
}

export default CommentLike
