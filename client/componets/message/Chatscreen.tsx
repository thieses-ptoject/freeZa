import React, { useState } from 'react'
import { Image, Text, View } from 'react-native-animatable'
import { addmessage, getonediscution } from '../../React-query/message/message'
import { GiftedChat } from 'react-native-gifted-chat'
import { FlatList, Pressable, ScrollView, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
const Chatscreen = ({route}:any) => {
   const {user,currentUser}=route.params
   const [onChangeMessage,setonChangeMessage]=useState('')
  const navigation=useNavigation()
   const { data: allMessages, isLoading, isError, isSuccess,refetch,error } = getonediscution(currentUser,user.id);
console.log(onChangeMessage)
const addMessage=addmessage()
const renderMessage = ({ item }: { item: any }) => {
  const isCurrentUser = item.senderId === currentUser;
console.log(item)
  return (
    <View style={[styles.messageContainer, { alignSelf: isCurrentUser ? 'flex-end' : 'flex-start' }]}>
    
      <View style={[styles.messageTextContainer, { backgroundColor: isCurrentUser ? '#F9E9ED' : '#E8EFE4' },{  borderBottomRightRadius:isCurrentUser? 0.001:30},{  borderBottomLeftRadius:isCurrentUser? 30:0.001}]}>
   < View style={{flexDirection:'row'}}>
    { !isCurrentUser&& <Image
  
                    source={{ uri: user.image}}
                    style={styles.image1}
         />}
      <Text  style={[styles.messageText,{color: isCurrentUser ? 'black' : 'black' }]}>{item.message}</Text>
      </View>
       <Text style={[styles.messageDate,{alignSelf:'flex-end'}]}>{moment(item.createdAt, "YYYYMMDD").fromNow()}</Text>
      </View>


    </View>
  );
};
 
   return (
    <View style={styles.container}>
      <View style={styles.navbar}> 
      <Pressable onPress={()=>navigation.navigate('Chat')}>
      <Ionicons name={ 'arrow-undo'} size={35} color={'white'} style={{marginTop:13,marginLeft:5}}/>
      </Pressable>
      <Image
                    source={{ uri: user.image}}
                    style={styles.image}
         />
         <Text style={styles.text1}>{user.firstName} {user.lastName}</Text>
         <Pressable onPress={()=>navigation.navigate('OtheruserProfile' ,{id:user})} style={{marginTop:'4%',marginLeft:'25%'}}>
         <Ionicons name={ 'information-circle'} size={35} color={'white'} />
         </Pressable>
      </View>
     
      <FlatList
        inverted
        data={allMessages?.reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        contentContainerStyle={styles.messageList}
        keyboardShouldPersistTaps="handled" // Add this prop to prevent dismissing the keyboard
      />

     <View style={[styles.inputContainer]}>
     <TextInput
                style={styles.input}
                onChangeText={setonChangeMessage}
               multiline
                placeholder="write here ...."

              />
              <Pressable onPress={()=>{addMessage.mutate({senderId:currentUser,recieverId:user.id,message:onChangeMessage});refetch()}}>
         <Ionicons name={ 'send'} size={35} color={'pink'} />
         </Pressable>
      

     </View>
      
    </View>
  )
}

export default Chatscreen
const styles= StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  messageContainer: {
    padding: 10,
   
    width:'60%',
   
  },
  messageList: {
    flexGrow: 1,
    paddingBottom: 10, // Adjust as needed to prevent overlap with the input container
  },
  navbar: {
    width: '100%',
    height: 70,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 70,
    marginRight: 2,
    marginTop: 10,
    marginLeft: 10,
  },
  image1: {
    height: 20,
    width: 20,
    borderRadius: 70,
    marginRight: 2,
  
    alignSelf:'flex-start'
  },
  text1: {
    fontSize: 17,
    opacity: 0.7,
    marginRight: 10,
    marginTop: 20,
    marginLeft: 2,
    color: 'white',
    borderColor: 'silver',
  },
  inputContainer: {
    // position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 2, 
    borderTopColor: 'pink', 
    height:'12%'
  },
  input: {
    width:'85%',
    height: '50%',
    borderRadius: 30,
    margin: 6,
    backgroundColor:'#F4F8F2',
    color:'#F3F4F3',
    paddingHorizontal:15

    
  },
  messageTextContainer: {
    borderRadius: 30,
    padding: 15,
    flex:1,
  
  },
  messageText: {
  
  },
  messageDate: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
  },
})