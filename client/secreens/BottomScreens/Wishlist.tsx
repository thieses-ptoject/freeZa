import React, {useContext, useEffect, useState}from 'react'
import { StyleSheet, View,Text,Image,Button,Pressable,Dimensions,TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { Getfavorite,deleteFav } from '../../React-query/WishList/wish';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserData } from '../../localStorage/getuser';
import moment from 'moment'; 
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo"

const Wishlist = () => {
  const [userId,setUserId]=useState('')
  const [color,setColor]=useState('red')
  const {mutate}=deleteFav()

  const Straw=(straws:number)=>{ 
    const strawArray = [];
    for (let i=1;i<=straws;i++){
      strawArray.push(
    <Image style={styles.strawberry} 
    source= {require("../../assets/strawberry.png")}/>
 )
    
  } 
  return strawArray
}  

// condition reserving:
const Reserve=(state:string)=>{
  if(state==='available'){
    return ( 
      
      <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Reserve</Text>
          </TouchableOpacity> 
    ) 
  } else {
    return(
      <View style={{flexDirection:'row',top:15}}>
        <Entypo name='block' size={20} color={'#FC5A8D'}/> 
        <Text style={styles.Reserve}>Not Available!</Text>
      </View>

    )
  }

}
 


  useEffect(()=>{
    getUserData().then(result=>setUserId(result.id))
  },[])



  
  const {data:favorite,isLoading,isError,refetch}=Getfavorite(userId)
  if(isLoading){
    return <Text>loading ...</Text>
  } 
  if(isError){
    return <Text>Error fetching data...</Text>
  }
  console.log(favorite); 


  const handledislike= async(userId:string,itemId:number)=>{
    
      mutate({userId,itemId})
      refetch()
   

  } 




  return (
    <KeyboardAwareScrollView>
     <View style={{flexDirection:'column',gap:10}}> 
     <Text style={styles.Wish}>Wish List</Text>
     {favorite?.map((product: any) => ( 
      <View key={product.item.id} style= {styles.container}>
     <View style={[styles.imageContainer]}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: product.item.image[0],
                    }}
                  />
              </View> 
      <View style={{flexDirection:'column',paddingLeft:10,gap:5,marginTop:'5%',marginBottom:'5%'}} >
        <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
          {/* <TouchableOpacity onPress={()=>{handledislike(userId,product.item.id)}} style={{padding:5}}>
      <Ionicons name={"heart"} size={25} color={color}/>
      </TouchableOpacity> */}
      <View style={styles.customRectangle}>
            {Straw(product.item.strawberries)}  
          </View > 
          </View> 
                  <Text style={styles.name}>{product.item.name}</Text> 
                  <Text style={{color:'#898383'}}  >{moment(product.item.createdAt).format("MMM Do YY")}</Text>
                  <View style={{flexDirection:'row'}} key={product.item.id}>
                    <FontAwesome name="tag" size={16} color="#FC5A8D" />
                    <Text style={styles.category}>{product.item.state}</Text>
                  </View>  

          {/* <View style={styles.customRectangle}>
          </View >  */}
          <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
          {/* <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Reserve</Text>
          </TouchableOpacity>  */}
          {Reserve(product.item.state)}
          <TouchableOpacity onPress={()=>{handledislike(userId,product.item.id)}} style={{top:8,padding:5,left:40}}>
      <Ionicons name={"heart"} size={25} color={color}/>
      </TouchableOpacity>
          </View>
         




      </View> 
      </View>

     ))}
      </View> 
      </KeyboardAwareScrollView>
  
  )
}
const styles= StyleSheet.create({
  container: {
    // flex: 1,
    shadowColor: "#fff", // Set the shadow color to white
    backgroundColor: "#fff", // Set the background color to white
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft:4,
    paddingRight:4,
    
    // alignSelf: "flex-start"
    // position: 'relative',
    // borderWidth: 0.5,
    borderRadius: 30,
    // flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    borderBlockColor: "#fff", // Set the border block color to white
    color: "#fff", // Set the text color to white
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5, // Adjust the shadow opacity as needed
    shadowRadius: 5, // Adjust the shadow radius as needed
    elevation: 2.5,
  },
  
  imageContainer: {
    width: 150,
    height: 200,
    position: 'relative',
   alignSelf:'flex-start',
   paddingTop:10,
   paddingLeft:7,
   paddingBottom:10
   

    // marginLeft: "auto",
    // marginRight: "auto"
  },
  image: {
    height: "100%",
    borderRadius: 20,
    width: "100%",
    resizeMode: 'cover'
  }, 
  name:{
    fontWeight:'500',
    // paddingTop:20,
    fontSize:15
    
  },
  customRectangle: {
    width: 10* 16, 
    height: 2.125 * 16,
    backgroundColor:"#fff",
    alignItems:'flex-start',
    // justifyContent:'center',
    flexDirection:'row',
    // top:10,
    borderRadius:15,
    
  },
  strawberry :{
    width: 30,
    height: 30,
  
    
  },
  // dateRectangle:{
  //   width: 6* 16, 
  //   height: 2.125 * 16,
  //   top:25,
  //   backgroundColor:"#FC5A8D",
  //   borderRadius:7,
  //   alignItems:'center',
  //   justifyContent:'center'

  // },
  Wish:{
    paddingTop:10,
    paddingLeft:5,
    fontWeight:'700',
    color:"#FC5A8D",
    fontSize:25,
    alignSelf:'center'
  },
  buttonContainer:{
    width: 6 * 16, 
    height: 2.125 * 16,
    top:10,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#FC5A8D',
    borderWidth:2,
    borderRadius:7


  },
  buttonText:{
    color: "#FC5A8D"
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#78CA46",
    borderRadius: 20,
    // margin: 10,
    // padding: 10,
    // paddingHorizontal: 15,
    justifyContent:'center',
    alignItems:'center'
  },
  category: {
    fontSize: 14,
    color: "#78CA46",
    marginLeft: 10,
  },
  Reserve:{
    color: "#FC5A8D",
    paddingLeft:5
  },
})

export default Wishlist
