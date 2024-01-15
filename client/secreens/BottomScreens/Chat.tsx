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

  const { data: alldisc, isLoading: messageloading, isError: messageerror, isSuccess: messagecomment, refetch } = getMessages(userConnected);
  return (
    <View>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Direct Messages</Text>
        </View>
    </View>
  )
}
export default Chat

const styles = StyleSheet .create({
  title:{
    color:'red',
    fontSize:25,
    alignSelf:'flex-start',
    marginLeft:19,
    marginTop:10,
    marginBottom:10,
    fontFamily:'Poppins'
  },
  titlecontainer:{
    backgroundColor:'silver', 
  marginTop:40,
  marginLeft:5,
  alignContent:'center',
  heigth:60,
  width:'60%',
 borderRadius:30
  
  }

})
