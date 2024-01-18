import React from 'react'
import {View,Text,StyleSheet, Image, Button} from 'react-native'
import { NavDetails } from './Navdetails'
// import { GetOne } from '../../React-query/ProductDetails/Details'
import { GetUser } from '../../React-query/ProductDetails/Details'
import moment from 'moment'
import straw from "../../assets/strawberry.png"
// import { GetUser } from '../../React-query/ProductDetails/Details'
export const ProductDetails = ({route}:any) => {
  const { product } = route.params;
  
  //fet request get onwner by Id 
  // ownerId (image : name  : stars ) 
// const {data:userData, isError,isLoading}=GetUser(product.ownerId)
// console.log(userData)
// const user = userData ? userData[0] : null;

  const Straw=(straws:number)=>{ 
    const strawArray = [];
    for (let i=1;i<=straws;i++){
      strawArray.push(straw)
    
  } 
  return strawArray
}
let data=Straw(product.strawberries)


    return (
      <View style={styles.container}>
      <View style={styles.rectangle}>
      <Image
               style={{width: "100%", height: "100%",borderRadius:15,resizeMode: 'cover'}}
               source={{
                uri: product.image[0],
               }}
             />
      </View> 
      <View style={{paddingVertical:10,marginLeft:5}}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.date}> {moment(product.createdAt).format("MMM Do YY")}</Text>
        <View style={{ flexDirection: "row-reverse", justifyContent:'space-between'}}>
          <View style={styles.customRectangle}>
              {data.map((el,i)=>(
                  <View>
                    <Image  key={i} source={el} style={styles.strawberry} />
                  </View>
                )
              )}
        </View> 
        </View>
        
        <Text style={styles.details}>Product Details</Text>
        <Text>{product.description}</Text>
        </View>
      </View>
    );
    
  } 
const styles = StyleSheet.create({
    rectangle: {
    position: "relative",
      height: 300, 
      borderRadius: 0.9375 * 16, 
      // backgroundColor: '#FBD0E6',
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
        flex: 1,
      },
      name : {
        fontWeight:"600",
        color:"rgba(120, 202, 70, 0.75)",
        // lineHeight:"125%"
        fontSize:25,
        

      },
      date:{
        color:"#898383",
        marginTop:7
      },
      details:{
        color:"#FA062E",
        marginTop:7
      },
      customRectangle: {
        width: 12.875 * 16, 
        height: 2.125 * 16,
        backgroundColor:"#FBD0E6",
        marginTop:12,
        alignItems:'flex-start',
        justifyContent:'center'
      },
      strawberry :{
        width: 15,
        height: 20,
        // alignSelf:'center',
        // top:18
      },
      Button:{
        width: 12.875 * 16, 
        height: 2.125 * 16,
        backgroundColor:"#FBD0E6"

      }
  });
