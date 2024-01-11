import React from 'react'
import {  Text,Image, StyleSheet, View } from 'react-native'

import CommentLike from './CommentLike'
import { getUser } from '../../react-query/blog/blog'
import { Color } from '../../GlobalStyles/GlobalStylesCreateItem'

const OneBlog = ({post}:any) => { 
  console.log(post.userId)
  const { data: user, isLoading, isError, isSuccess } = getUser(post.userId);

  if(isSuccess) console.log('fffffffff',user.image)
  console.log(post.image)
  return (
   <View >
 <View style={styles.card}>
 <View style={{flexDirection:'row'}}>
  {isSuccess&&
  <View>
    <Image 
        source={{uri:user.image}} style={styles.image}
      />
     <Text style={{color:'#60D519',marginLeft:2,fontStyle:'italic'}}>{user.firstName} {user.lastNamer}</Text>
  </View>}
  <Text>:{post.body}</Text>
  </View>
  <Image 
        source={{uri:post.image}}
      />
  <CommentLike/>
  </View>
 
   </View>
  )
}
const styles = StyleSheet.create({
  card:{
    width:'80%',
    height:100,
    backgroundColor:'#FCEFF6',
    borderColor:'black',
    borderWidth:1,
    alignSelf:'center',
    borderRadius:10,
    margin:4,
    
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 70,
    marginRight: 10,
    top: "auto",
    marginBottom: "auto",
  },
  
})

export default OneBlog

