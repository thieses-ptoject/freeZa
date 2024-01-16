import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, Modal, Alert, Image, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { addComment, addLike, deletecomment, getcomment, getlike } from '../../React-query/blog/blog';
import { getUserData } from '../../localStorage/getuser';
import { ScrollView } from 'react-native-gesture-handler';
const CommentLike = ({ idPost, iduser }: any) => {
  const [color, setColor] = useState(true)
  const [commented, setCommented] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState('');
  const [userConnected, setUserConncted] = useState<string>('')
  const [modalVisibleComment, setModalVisibleComment] = useState(false);
  console.log(userConnected, 'aaaaa')
  useEffect(() => {
    getUserData().then((result: any) => {
      setUserConncted(result.id)

    })
  }, []);

  const { data: comments, isLoading: commentloading, isError: commenterror, isSuccess: issuccescomment, refetch: refetchcom } = getcomment(idPost);
  const { data: like, isLoading, isError, isSuccess, refetch } = getlike(idPost, userConnected);
  const addlikes = addLike()
  const addComments = addComment()
  const deleteComment=deletecomment()
  // console.log(comments,'ggggggggggggggg')
  return (<View>
    <View style={{ flexDirection: 'row', gap: 15, marginLeft: 12 }}>
      {isSuccess && <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={() => { addlikes.mutate({ postId: idPost, userId: userConnected }); refetch() }}>
          {like.like ? <Ionicons name={'heart'} size={30} color={'red'} /> :
            <Ionicons name={'heart-outline'} size={30} color={'red'} />}</Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={{ fontSize: 16 }}>{like.all.length} likes</Text></Pressable>
      </View>}
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
        {color ? <MaterialCommunityIcons name={'comment-account-outline'} size={30} color={'black'} /> :
          <MaterialCommunityIcons name={'comment-account'} size={30} color={'black'} />}
        {issuccescomment && <Pressable onPress={() => setModalVisibleComment(true)}>
          <Text style={{ fontSize: 16 }}>{comments.length ? comments.length : 0} comments</Text>
        </Pressable>}

      </View>
    </View>
    <Modal
     
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {isSuccess && like.all.map((ele: any) => {
            return (
              <View style={{ flexDirection: 'row', gap: 5, }}>
                <Image
                  source={{ uri: ele.image }} style={styles.image}
                />
                <Text>{ele.firstName} {ele.lastName}</Text>
              </View>)
          })}

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide </Text>
          </Pressable>
        </View>
      </View>
    </Modal>

    <Modal
      
      animationType="slide"
      transparent={true}
      visible={modalVisibleComment}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisibleComment(!modalVisibleComment);
      }}>

      <ScrollView style={styles.centeredView}>

        <View style={styles.modalViewComment}>
          
          < View style={{ alignSelf: 'flex-end' }}>
            <Pressable

              onPress={() => setModalVisibleComment(!modalVisibleComment)}>
              <MaterialIcons name={'cancel'} size={30} color={'red'} />
            </Pressable>
          </View>
          {issuccescomment && comments.map((ele: any) => {
            return (

              <View style={{ flexDirection: 'row', gap: 5, borderColor: '#F0D3E2', borderWidth: 1, borderRadius: 10, backgroundColor: '#F0D3E2', }}>

                <Image
                  source={{ uri: ele.image }} style={styles.image}
                />

                <View style={{ flexDirection: 'column', gap: 5 }}>
                  <Text>{ele.firstName} {ele.lastName}:</Text>
                  <Text>{ele.body}</Text>

                </View>
                <View style={{ alignSelf: 'flex-end', marginLeft: 'auto', marginRight: 4 }}>

                <Pressable onPress={()=>{deleteComment.mutate({id:ele.idcomment,userId:userConnected});refetchcom()}}>
                  {(ele.id === userConnected || userConnected === iduser) && <Feather name={'delete'} size={20} color={'red'} />}
                
                </Pressable>
                </View>
              </View>)
          })}
          <View style={[styles.button, styles.buttonClose, { flexDirection: 'row' }]}>
            <TextInput
              style={{ width: '90%' }}
              onChangeText={onChangeText}
              value={text}
              placeholder="add Comment"
              multiline

            />
            <Pressable onPress={() => { addComments.mutate({ postId: idPost, body: text, userId: userConnected }), refetchcom() }}>
              <MaterialCommunityIcons name={'send-outline'} size={30} color={'red'} />
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </Modal>
  </View>
  )
}

export default CommentLike
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 70,
    marginRight: 10,
  },
  modalView: {
    margin: 20,
  
    gap: 8,
    height:'100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#F0D3E2',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalViewComment: {
    margin: 20,
    width: '90%',
    gap: 8,
     
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});