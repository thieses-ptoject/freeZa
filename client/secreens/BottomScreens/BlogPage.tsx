import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, SafeAreaView,Image,ScrollView, TextInput, Alert, ImageBackground } from 'react-native'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../firebase';
import OneBlog from '../../componets/blogPage/oneBlog';
import CommentLike from '../../componets/blogPage/CommentLike';
import { ContextPost } from '../../useContext/createBlog';

import { addPost, getPosts } from '../../React-query/blog/blog';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getUserData } from '../../localStorage/getuser';

const BlogPage = () => {
  const [addPosts, setAddPosts] = useState('')
  const [image, setImage] = useState<null | string>(null);
  const { addpost, setAddPost } = useContext(ContextPost)
  const [userConnected, setUserConncted] = useState('')
  const { data: posts, isLoading, isError, isSuccess,refetch } = getPosts();
console.log(userConnected)
  const addposts=addPost()
  useEffect(() => {
    getUserData().then((result: any) => {
      setUserConncted(result.id)

    })
  }, []);
  console.log(addPosts,'ggggggggggg')
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,

      quality: 1,
    });
    
    if (result && 'uri' in result) {
      // Check if 'uri' property exists on the result object
      uploadImage(result.uri as string, 'image').then(() => {
        Alert.alert('imagesaved')
      }).catch((error) => { console.error('Firebase Storage Error:', error.code, error.message); Alert.alert("error") })
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
  return (
    <ScrollView>

      {
      isSuccess && <SafeAreaView>
        <View style={styles.allCategory}>
          <View style={styles.botton}>
          <Text style={styles.testAll}>All</Text>
          </View>
          <View style={styles.botton2}>
          <Text style={styles.testAll}>Most Commented</Text>
          </View>
          
          </View>
          {addpost&&<View style={styles.description} >
         <TextInput
          numberOfLines={4}
          multiline={true}
          textAlignVertical={"top"}
          onChangeText={setAddPosts}
          placeholder='add post' >
         </TextInput>
         <View style={{flexDirection:'row-reverse'}}>
          <Pressable      
          onPress={
          async()=>{try{ addposts.mutate({image:image,body:addPosts,id:userConnected });
          setAddPost(false)
           refetch() }
        catch(err){console.log(err)}}}>
         <AntDesign name={'caretright'} size={40} color={'red'} />
         </Pressable>
         <Pressable onPress={() => {pickImage() }}>
            
                  <Image style={styles.rectangle}
        source={require('../../assets/blogpage/image.png')}
      />
          </Pressable>
        
          </View>
         </View>}
         <View style={{alignContent:'center',gap:30}}>
        { posts.map((post:any)=>{return(
        <View >
          <OneBlog post={post}/>
          </View>)})}
          </View> 
      </SafeAreaView>}
     
    </ScrollView>
  )
}

export default BlogPage
const styles = StyleSheet.create({
  testAll: {
    paddingTop: 2,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    color: 'red',
    alignSelf:'center',
    marginTop:'auto'
  },
  botton:{
    width:'10%',
    height:25,
    backgroundColor:'#D3EBC5',
    marginLeft:3,
    borderRadius:10,
   
  }
  , botton2:{
    width:'45%',
    height:25,
    backgroundColor:'#D3EBC5',
    marginLeft:3,
    borderRadius:10,
   
  },
  allCategory: {
    justifyContent: 'space-between',
    flexDirection:'row', 
    marginTop:10,
    marginBottom:20

  },
  description: {
    color: "grey",
    opacity: 0.7,
    fontSize: 20,
    fontWeight: "300",
    backgroundColor: "#D3EBC5",
    height: 150,
    width:'90%',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft:'auto',
    marginRight:'auto'
    
    

  
  
  },
  rectangle:{
 alignSelf:'flex-end',
 width:40,
 height:40,
 
  },
   image: {
    flex: 1,
    justifyContent: 'center',
  },

})
