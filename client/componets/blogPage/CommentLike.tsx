import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, Modal, Alert, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addLike, getcomment, getlike } from '../../React-query/blog/blog';
const CommentLike = ({ idPost }: any) => {
  const [color, setColor] = useState(true)
  const [commented, setCommented] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleComment, setModalVisibleComment] = useState(false);
  const { data: comments, isLoading: commentloading, isError: commenterror, isSuccess: issuccescomment, refetch: refetchcom } = getcomment(idPost);
  const { data: like, isLoading, isError, isSuccess, refetch } = getlike(idPost);
  const addlikes = addLike()
  console.log(comments,'ggggggggggggggg')
  return (<View>
    <View style={{ flexDirection: 'row', gap: 15, marginLeft: 12 }}>
      {isSuccess && <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={() => { addlikes.mutate({ postId: idPost, userId: 1 }); refetch() }}>
          {like.like ? <Ionicons name={'heart'} size={30} color={'red'} /> :
            <Ionicons name={'heart-outline'} size={30} color={'red'} />}</Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={{fontSize:16}}>{like.all.length} likes</Text></Pressable>
      </View>}
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
        {color ? <MaterialCommunityIcons name={'comment-account-outline'} size={30} color={'black'} /> :
          <MaterialCommunityIcons name={'comment-account'} size={30} color={'black'} />}
        {issuccescomment &&  <Pressable onPress={() => setModalVisibleComment(true)}> 
        <Text style={{fontSize:16}}>{comments.length ? comments.length : 0} comments</Text>
        </Pressable>}

      </View>
    </View>
    <Modal
    style={{width:100,height:100}}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {isSuccess&&like.all.map((ele: any) => {
            return (
              <View style={{flexDirection:'row',gap:5}}>
                 <Image
                source={{ uri: ele.image }} style={styles.image}
              />
              <Text>{ele.firstName}</Text>
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
    style={{width:100,height:100}}
      animationType="slide"
      transparent={true}
      visible={modalVisibleComment}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisibleComment);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalViewComment}>
          {issuccescomment&&comments.map((ele: any) => {
            return (
             
              <View style={{flexDirection:'row',gap:5}}>
                 <Image
                source={{ uri: ele.image }} style={styles.image}
              /> <View  style={{flexDirection:'column',gap:5}}>
              <Text>{ele.firstName} {ele.lastName}</Text>
              <Text>{ele.body}</Text>
              </View>
              
              </View>)
          })}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisibleComment(!modalVisibleComment)}>
            <Text style={styles.textStyle}>Hide </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  </View>
  )
}

export default CommentLike
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 70,
    marginRight: 10,
  },
  modalView: {
    margin: 20,
    width:'50%',
    gap:8,
   
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    backgroundColor: 'red',
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
  modalViewComment:{
    margin: 20,
    width:'90%',
    gap:8,
   
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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