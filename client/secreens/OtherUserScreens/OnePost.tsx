import React from "react";
import { View,Text, StyleSheet,Image } from "react-native";
import { Card } from "react-native-elements/dist/card/Card";
import { getUser } from "../../React-query/blog/blog";
import moment from "moment";

export const OnePost = ({ navigation, route }: any) => {
 const {itemData}=route.params
 console.log(itemData)
 const {data:user,isLoading,isError,isSuccess}=getUser(itemData.userId)
 if(isSuccess) console.log(user.image)
 if(isLoading){
    return <View><Text>Loading...</Text></View>
 }
  return (
    <View style={[styles.card,{height:itemData.image?'auto':100}]}>
<View>
    {isSuccess &&
    <View style={{flexDirection:'row',marginLeft:10,marginTop:3}}>
    <Image 
        source={{uri:user.image}} style={styles.image}
      />
      <View style={{opacity:10,marginLeft:10}}>
     <Text style={{color:'red',marginLeft:2,fontStyle:'italic',fontSize:16}}>{user.firstName} {user.lastName}</Text>
     <Text>{moment(itemData.createdAt, "YYYYMMDD").fromNow()}</Text>
     
     </View>
  </View>
    
    
    }




</View>



    </View>
  )
}
const styles= StyleSheet.create({
    card:{
        opacity: 0.9,
        width:'90%',
        backgroundColor:'#F0D3E2',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'flex-start',
        marginTop:'10%',
        flexDirection:'column',
        borderRadius: 20,
      },
      image:{
    height: 30,
    width: 30,
    borderRadius: 70,
    marginRight: 10,

      },

}) 

