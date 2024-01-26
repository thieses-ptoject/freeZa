import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native-animatable'
import { addmessage } from '../../React-query/message/message'

import { Alert, FlatList, Platform, Pressable, ScrollView, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { Badge } from 'react-native-elements'
import { ChatContext } from '../../useContext/chatContext'
import config from "../../config.json"

import { storage } from '../../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
const Chatscreen = ({ route }: any) => {
  const {fetchNotifications, onlineUsers, setRecipient, setnewMessage, refetchM, setRefetchM,setFetchNotifications } = useContext(ChatContext)
  const { user, currentUser } = route.params
  const [onChangeMessage, setonChangeMessage] = useState('')
  const [data, setData] = useState([])
  const [image, setImage] = useState<string>('');
  const [desplay,setdesplay]=useState(true)
  const navigation = useNavigation()
 

  const MIN_HEIGHT = Platform.OS === "ios" ? 20 : 0;

  const verfycon = (userId: string) => {

    for (let i = 0; i < onlineUsers.length; i++) {
      if (onlineUsers[i].userId === userId) {
        
        return true
      }
    }
    return false
  }
  //  const { data: allMessages, isLoading, isError, isSuccess,refetch,error } = getonediscution(currentUser,user.id);

  useEffect(() => {
    axios.get(`http://${config.ip}:3001/message/${currentUser}/${user.id}`)
      .then((res) => { setData(res.data) }).catch((err) => console.log(err))
    axios.delete(`http://${config.ip}:3001/notifications/${currentUser}/${user.id}`)
      .then(() => { console.log('done') })
      .catch((err) => { console.log('rrrrrrrrrrrrrrrrrr') })
      setFetchNotifications(!fetchNotifications)
  }, [refetchM,desplay])
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,

      quality: 1,
    });

    if (result && 'uri' in result) {
      // Check if 'uri' property exists on the result object
      uploadImage(result.uri as string, 'image').then(() => {
        Alert.alert('image uploaded')
      })
      .catch((error) => { console.error('Firebase Storage Error:', error.code, error.message); Alert.alert("error") })
    } else {

      console.error("URI not found in image picker result");
    }
  };


  const uploadImage = async (uri: any, imageName: string) => {
    
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      imageName = `image_${Date.now()}.jpg`;


      const imageRef = ref(storage, `images/${imageName}`);


      await uploadBytes(imageRef, blob);


      const downloadURL = await getDownloadURL(imageRef);
      console.log('Image uploaded successfully. Download URL:', downloadURL);
      setImage(downloadURL);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }

  };

  const addMessage = addmessage()
  const renderMessage = ({ item }: { item: any }) => {
    const isCurrentUser = item.senderId === currentUser;
    

    return (
      
      <View style={[styles.messageContainer, { alignSelf: isCurrentUser ? 'flex-end' : 'flex-start' }]}>

        <View style={[styles.messageTextContainer, { backgroundColor: isCurrentUser ? '#F9E9ED' : '#E8EFE4' }, { borderBottomRightRadius: isCurrentUser ? 0.001 : 30 }, { borderBottomLeftRadius: isCurrentUser ? 30 : 0.001 }]}>
          < View style={{ flexDirection: 'row' }}>
            {!isCurrentUser && <Image

              source={{ uri: user.image }}
              style={styles.image1}
            />
            }

            <Text style={[styles.messageText, { color: isCurrentUser ? 'black' : 'black' }]}>{item.message}</Text>
            {item.image.length>0 ? <Image

              source={{ uri: item.image }}
              style={styles.image2}
            /> : <View></View>}
          </View>
          <Text style={[styles.messageDate, { alignSelf: 'flex-end' }]}>{moment(item.createdAt, "YYYYMMDD").fromNow()}</Text>
        </View>


      </View>
    );
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.navigate('Chat')}>
          <Ionicons name={'arrow-undo'} size={35} color={'white'} style={{ marginTop: 13, marginLeft: 5 }} />
        </Pressable>
        <View>
          <Image
            source={{ uri: user.image }}
            style={styles.image}
          />
          {verfycon(user.id) && <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: 11, right: 6, }}

          />}
        </View>
        <Text style={styles.text1}>{user.firstName} {user.lastName}</Text>
        <Pressable onPress={() => navigation.navigate('Createappointement', { user1: user ,currentUser:currentUser})} style={{ marginTop: '4%', marginLeft: '25%' }}>
          <AntDesign name={'pluscircle'} style={{marginRight:5}}  size={30} color={'white'} />
        </Pressable>
      </View>

      <FlatList
        inverted
        data={data}
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
          <Pressable onPress={() => pickImage()}>
            <Ionicons name={'image'} size={35} color={'pink'} />
          </Pressable>
          <Pressable onPress={() => {
            addMessage.mutate({ senderId: currentUser, recieverId: user.id, message: onChangeMessage, image:image });
            setRefetchM(!refetchM)
            setdesplay(!desplay)
            setRecipient(user.id);
            setnewMessage(onChangeMessage)
            setonChangeMessage('')
          }}>

            <Ionicons name={'send'} size={35} color={'pink'} />
          </Pressable>
        </View>

      </View>

    </View>
  )
}

export default Chatscreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FBF9F9',
    marginTop: Platform.OS === "ios" ? 40 : 0,
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
    width: '70%',
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