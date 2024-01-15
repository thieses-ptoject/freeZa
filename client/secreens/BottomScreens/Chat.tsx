import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { getUserData } from '../../localStorage/getuser'
import { getMessages } from '../../React-query/message/message'
export const Chat = () => {
  const [userConnected, setUserConncted] = useState<string>('')
  console.log(userConnected, 'aaaaa')
  useEffect(() => {
    getUserData().then((result: any) => {
      setUserConncted(result.id)

    })
  }, []);

  const { data: alldisc, isLoading: messageloading, isError: messageerror, isSuccess, refetch } = getMessages(userConnected);
  console.log(alldisc,'disc',userConnected)
  if(messageloading){ return <View><Text>Loading</Text></View>}
 
  else return (
    <View style={{gap:5}}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Direct Messages</Text>
        
        </View>
        { isSuccess &&<View>
        {alldisc.map((ele:any)=>{
          return(
          <View style={styles.view1} >

          </View>)


        })}
        </View>}
    </View>
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
    backgroundColor:'#ECECEC', 
  marginTop:40,
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
