import React, { useEffect, useState } from 'react'
import {  Text,Image, StyleSheet, View, ActivityIndicator } from 'react-native'

import CommentLike from './CommentLike'
import { getUser } from '../../React-query/blog/blog'
import { Color } from '../../GlobalStyles/GlobalStylesCreateItem'
import moment from 'moment'
import { getUserData } from '../../localStorage/getuser'

const OneBlog = ({post}:any) => { 
  const [userConnected, setUserConncted] = useState<string>('')
  
 
  useEffect(() => {
    getUserData().then((result: any) => {
      setUserConncted(result.id)

    })
  }, []);
 
  const { data: user, isLoading, isError, isSuccess } = getUser(post.userId);


  if(isSuccess) console.log('fffffffff',user.image)

  return (
   <View style={[styles.card,{height:post.image?'auto':100}]} >

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
  <View style={{gap:5}}>
  <View  style={{
    
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
      />
     }
    
    </View>
  </View>
{ isSuccess && <CommentLike idPost={post.id} iduser={user.id} usercon={userConnected}/>}

   </View>
  )
}
const styles = StyleSheet.create({
  card:{
    opacity: 0.9,
    width:'95%',
    backgroundColor:'#F0D3E2',
    alignSelf:'center',
    marginTop:'5%',
    flexDirection:'column',
    borderRadius: 5,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 70,
    marginRight: 10,
   
    
  },
  image1: {
    height:250,
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

