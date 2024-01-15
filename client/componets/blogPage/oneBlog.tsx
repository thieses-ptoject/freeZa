import React from 'react'
import {  Text,Image, StyleSheet, View } from 'react-native'

import CommentLike from './CommentLike'
import { getUser } from '../../React-query/blog/blog'
import { Color } from '../../GlobalStyles/GlobalStylesCreateItem'
import moment from 'moment'

const OneBlog = ({post}:any) => { 
 
  const { data: user, isLoading, isError, isSuccess } = getUser(post.userId);

  if(isSuccess) console.log('fffffffff',user.image)
  if(isLoading){
    return <View><Text>Loading ...</Text></View>
  }
  return (
   <View style={[styles.card,{height:post.image?300:100}]} >

 <View >
  {isSuccess&&
  <View style={{flexDirection:'row',marginLeft:10,marginTop:3}}>
    <Image 
        source={{uri:user.image}} style={styles.image}
      />
      <View style={{opacity:10,marginLeft:10}}>
     <Text style={{color:'red',marginLeft:2,fontStyle:'italic',fontSize:16}}>{user.firstName} {user.lastName}</Text>
     <Text>{moment(post.createdAt, "YYYYMMDD").fromNow()}</Text>
     
     </View>
  </View>}
  <View  style={{height: 50,
    width: '100%',
    backgroundColor:'#FCEFF6',
    opacity:10,
     }}>
       <Text style={{marginLeft:3,marginTop:3}}>{post.body}</Text>
       </View>
  </View>
  <View style={{flexDirection:'column',marginBottom:5}}> 
 { <Image 
        source={{uri:post.image}}
        style={styles.image1}
      />}
    
  </View>
  
  <CommentLike idPost={post.id} iduser={user.id}/>

   </View>
  )
}
const styles = StyleSheet.create({
  card:{
    opacity: 0.9,
    width:'90%',
    backgroundColor:'#F0D3E2',
    alignSelf:'center',
    marginTop:'10%',
    flexDirection:'column',
    borderRadius: 20,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 70,
    marginRight: 10,
   
    
  },
  image1: {
    height: 168,
    width: '100%',
  //  marginLeft:10,
    //  borderBottomRightRadius:10,
    //  borderBottomLeftRadius:10,
     objectFit:'fill'
  }, 
  bodyStyle:{


  }
})

export default OneBlog

