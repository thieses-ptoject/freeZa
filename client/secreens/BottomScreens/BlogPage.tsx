import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Pressable, SafeAreaView,Image,ScrollView, TextInput, Alert } from 'react-native'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../firebase';
import OneBlog from '../../componets/blogPage/oneBlog';
import CommentLike from '../../componets/blogPage/CommentLike';
import { ContextPost } from '../../useContext/createBlog';
import { getPosts } from '../../react-query/blog/blog';

const BlogPage = () => {
  const [addPosts, setAddPosts] = useState('')
  const [image, setImage] = useState<null | string>(null);
  const { addpost, setAddPost } = useContext(ContextPost)
  const { data: posts, isLoading, isError, isSuccess } = getPosts();
  console.log(posts,'posts')
  
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
          <Text style={styles.testAll}>All</Text>
          <Text style={styles.testAll}>Most Commented</Text>
          </View>
          {addpost&&<View style={styles.description} >
         <TextInput
          numberOfLines={4}
          multiline={true}
          textAlignVertical={"top"}
          onChangeText={setAddPosts}
          placeholder='add post' >
         </TextInput>
         <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
         <Pressable onPress={() => {pickImage() }}>
            
                  <Image style={styles.rectangle}
        source={require('../../assets/blogpage/image.png')}
      />
          </Pressable>
          <Image style={styles.rectangle}
        source={require('../../assets/blogpage/Polygon.png')}
      />
      </View>
         </View>}
         <View style={{justifyContent:'space-between',alignContent:'center'}}>
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
    color: '#FC5A8D'
  },
  allCategory: {
    justifyContent: 'space-between',
    flexDirection:'row', 
    marginTop:10,
    marginBottom:20

  },
  description: {
    color: "grey",
    opacity: 0.5,
    fontSize: 20,
    textAlign: "left",
    fontWeight: "300",
    backgroundColor: "#FBD0E6",
    textAlignVertical: 'center',
    height: 80,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderBlockColor:'black',
    borderWidth:2,
    

  
  
  },
  rectangle:{

 width:40,
 height:40,
 
  }

})
