import moment from "moment";
import * as React from "react";
import { Text,View,StyleSheet,Pressable, Image, FlatList} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addMessageClaim, getAllMessage } from "../../React-query/help-center/helpCenter";
import { addmessage } from "../../React-query/message/message";



export const HelpCenter = ({ navigation ,route}: any) => {
  const {user}=route.params
  const [onChangeMessage, setonChangeMessage] = React.useState('')
  const { data: allMessages, isLoading, isError, isSuccess,refetch,error } = getAllMessage(user);
  console.log(allMessages,'userrrrrrrr')
  const  addmessage=addMessageClaim()
  const renderMessage = ({ item }: { item: any }) => {
    const isCurrentUser = item.userId === user;
    

    return (
      <View style={[styles.messageContainer, { alignSelf: isCurrentUser ? 'flex-end' : 'flex-start' }]}>

        <View style={[styles.messageTextContainer, { backgroundColor: isCurrentUser ? '#F9E9ED' : '#E8EFE4' }, { borderBottomRightRadius: isCurrentUser ? 0.001 : 30 }, { borderBottomLeftRadius: isCurrentUser ? 30 : 0.001 }]}>
          < View style={{ flexDirection: 'row' }}>
            

            <Text style={[styles.messageText, { color: isCurrentUser ? 'black' : 'black' }]}>{item.claim}</Text>
           
          </View>
          <Text style={[styles.messageDate, { alignSelf: 'flex-end' }]}>{moment(item.createdAt, "YYYYMMDD").fromNow()}</Text>
        </View>


      </View>
    );
  };


  return (
   
    <View style={styles.container}>
    <View style={[styles.navbar]}>
    <MaterialIcons name={'admin-panel-settings'} size={35} color={'white'} />
     <Text style={{color:'white',alignSelf:'center',fontSize:18,marginRight:'auto'}}>Contact us </Text>
   
    </View>
<View>
  <Text style={ { alignSelf:  'flex-start',fontSize:23 }}>WellCome we are here to help YOu!</Text></View>
    <FlatList
        inverted
        data={allMessages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        contentContainerStyle={styles.messageList}
        keyboardShouldPersistTaps="handled" 
      />

    <View style={[styles.inputContainer]}>
      <TextInput
        value={onChangeMessage}
        style={styles.input}
        onChangeText={setonChangeMessage}
        multiline
        placeholder="write here ...."


      />
      <View style={{ flexDirection: 'row', gap: 22 }}>
          <Pressable onPress={() => {
          addmessage.mutate({  userid: user, claim: onChangeMessage });
          refetch()
          setonChangeMessage('')
        }}>

          <Ionicons name={'send'} size={35} color={'pink'} />
        </Pressable>
      </View>

    </View>

  </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FBF9F9',

  },
  messageContainer: {
    padding: 10,

    width: '60%',

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

    alignSelf: 'flex-start'
  },
  image2: {
    height: 130,
    width: 130,
    borderRadius: 10,
    marginRight: 2,

    alignSelf: 'flex-start'
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
    height: '12%'
  },
  input: {
    width: '85%',
    height: '50%',
    borderRadius: 30,
    margin: 6,
    backgroundColor: '#F4F8F2',
    color: 'black',
    paddingHorizontal: 15


  },
  messageTextContainer: {
    borderRadius: 30,
    padding: 15,
    flex: 1,

  },
  messageText: {

  },
  messageDate: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
  },
})


