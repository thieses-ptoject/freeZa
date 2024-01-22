import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { getUserData } from '../../localStorage/getuser'
import { getMessages } from '../../React-query/message/message'
import OneUser from '../../componets/message/OneUser'
import axios from 'axios'
import config from "../../config.json"
import {auth} from '../../firebase'
import { ScrollView } from 'react-native-gesture-handler'
// import { auth } from 'firebase/auth'
export const Chat = () => {
  const [userConnected, setUserConncted] = useState<string>('')
  const [otherUser,setOtherUser]=useState({})
  const [data,setData]=useState([])
  

    getUserData().then((result: any) => {
      setUserConncted(result.id)})
      .catch((err)=>console.log(err.message,'gggg'))
    
     useEffect(()=>{
      axios.get(`http://${config.ip}:3001/message/${userConnected}`).then((result)=>{
        setData(result.data)
      })
     },[userConnected])
    
   

  // const { data: message, isLoading, isError, isSuccess,error } = getMessages(userConnected);
  // console.log(message)  
  // if(isLoading) {return <View><Text>loading</Text></View>}
   return (
    < ScrollView style={{flex:1,gap:5,backgroundColor:'white'}}>
    <View style={{paddingBottom:10}}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Direct Messages</Text>
        </View>
       
        {data.length>0 && data.map((ele:any,i:any)=>{
      
          return(
            
        
            <OneUser id={ele.id} currentUser={userConnected} message={ele}/>
         )

        
        })}
         
    </View>
    </ScrollView>
  )
}
export default Chat

const styles = StyleSheet .create({
  title:{
    color:'#FC5A8D',
    fontSize:25,
    alignSelf:'flex-start',
    marginLeft:19,
    marginTop:10,
    marginBottom:10,
   
  },
  titlecontainer:{
    backgroundColor:'#EAF9E0', 
  marginTop:'15%',
  marginLeft:5,
  alignContent:'center',
  heigth:60,
  width:'60%',
  borderRadius:30
  
  },
  view1: {
    flexDirection: "row",
    padding: 10,
    top: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    backgroundColor: "#FFECF6",
    borderRadius: 1000,
    borderColor: "#fff",
    borderWidth: 2,
  },


})
