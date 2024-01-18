import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { getOneUserData, updateprofile } from "../../React-query/user/profileUser";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../firebase";
import axios from "axios";
import  config from "../../config.json";
import { getUserData } from './../../localStorage/getuser';


export const EditProfil = ({ navigation }: any) => {

  const [userConnected, setUserConncted] = useState<string>('')
  const [data,setData]=useState()
  const [ desplay, setDesplay]= useState(false)
  // const { data, isLoading, isError, refetch } = getOneUserData();
  const [image, setImage] = useState(data?.image || "");
  const [firstName, setFirstName] = useState(data?.firstName || "");
  const [lastName, setLastName] = useState(data?.lastName || "");
  const [email, setEmail] = useState(data?.email || "");
  const [address, setAddress] = useState(data?.address || "");
  const [phone, setPhone] = useState(data?.phone || "");



  const updatePRo = updateprofile();
  
  getUserData().then((result: any)=> {
    setUserConncted(result.id)})

  useEffect(() => {
    axios.get(`http://${config.ip}:3001/user/getuser/${userConnected}`).then((result)=>{
     setData(result.data)
     setDesplay(true)
   }).catch((err)=>console.log(err)) 
      }, [userConnected]);



  // if (isLoading) {
  //   return (
  //     <View>
  //       <ActivityIndicator size="large" color="#FC5A8D" />
  //     </View>
  //   );
  // }
  // if (isError) {
  //   <View>
  //     <Text>Error fetching user data</Text>
  //   </View>;
  // }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,

      quality: 1,
    });

    if (result && 'uri' in result) {
     
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
      console.log("Image uploaded successfully. Download URL:", downloadURL);
      setImage(downloadURL);
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  // const hundelSubmit = async () => {
  //   try {
  //     await updatePRo.mutateAsync({firstName,lastName,image,address,phone});
  //     refetch();
  //   } catch (errors) {
  //     Alert.alert("errors");
  //   }
  // };


    // console.log(firstName, "ok"),
    //   console.log(lastName, "ok"),
    //   console.log(image, "ok"),
    //   console.log(address, "ok"),
      console.log(firstName, "00000000000000000000000000000ok");

  return (
   
       <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
   {desplay && <SafeAreaView style={styles.SafeareaStyle}>
        <ScrollView>
          <View style={styles.view1}>
            <TouchableOpacity>
              <Image
                source={{ uri: image ? image : data?.image ? data.image : "" }}
                style={styles.image}
              />
              <Pressable
                onPress={() => {
                  pickImage();
                }}
              >
                <View style={styles.view2}>
                  <MaterialIcons
                    name="photo-camera"
                    size={25}
                    color="#FC5A8D"
                  />
                </View>
              </Pressable>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.view3}>
              <Text style={styles.text}>FirstName</Text>
              <View style={styles.view4}>
                <View style={styles.inputstyle}>
                  <Ionicons
                    name="account-outline"
                    size={25}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    placeholder="FirstName"
                    value={firstName}
                    onChangeText={(value) => setFirstName(value)}
                    editable={true}
                  />
                </View>
              </View>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text}>LastName </Text>
              <View style={styles.view4}>
                <View style={styles.inputstyle}>
                  <Ionicons
                    name="account-outline"
                    size={25}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    placeholder="lastName"
                    value={lastName}
                    onChangeText={(value) => setLastName(value)}
                    editable={true}
                  />
                </View>
              </View>
            </View>

            <View style={styles.view3}>
              <Text style={styles.text}>Email</Text>
              <View style={styles.view4}>
                <View style={styles.inputstyle}>
                  <Ionicons
                    name="email-outline"
                    size={25}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    placeholder="email"
                    value={email}
                    editable={false}
                  />
                </View>
              </View>
            </View>

            <View style={styles.view3}>
              <Text style={styles.text}>Phone Number</Text>
              <View style={styles.view4}>
                <View style={styles.inputstyle}>
                  <Ionicons name="phone" size={25} style={styles.iconStyle} />
                  <TextInput
                    placeholder="phone"
                    value={phone}
                    onChangeText={(value) => setPhone(value)}
                    editable={true}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.view3}>
            <Text style={styles.text}>Address</Text>
            <View style={styles.view4}>
              <View style={styles.inputstyle}>
                <Ionicons
                  name="map-marker-account-outline"
                  size={25}
                  style={styles.iconStyle}
                />
                <TextInput
                  placeholder="address"
                  value={address}
                  onChangeText={(value) => setAddress(value)}
                  editable={true}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.buttonSave}>
            <Text
              onPress={() => {
                updatePRo.mutate({
                  firstName,
                  lastName,
                  image,
                  address,
                  phone,

                });
                navigation.navigate('Account', { refresh: true });
              }}
            >
              Save Change
            </Text>
          </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>}
      </KeyboardAvoidingView>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  SafeareaStyle: {
    flex: 1,
    backgroundColor: "#FFF9FC",
    paddingHorizontal: 22,
  },
  view1: {
    alignItems: "center",
    marginVertical: 22,
  },
  image: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: "#F20B32",
  },
  view2: {
    position: "absolute",
    bottom: 0,
    right: 10,
    zIndex: 9999,
  },
  view3: {
    flexDirection: "column",
    marginBottom: 6,
  },
  view4: {
    height: 44,
    width: "100%",
    borderColor: "#F20B32",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
    backgroundColor: "#F7FCF4",
  },

  buttonSave: {
    borderColor: "#fff",
    height: 44,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC5A8D",
  },
  greenSvg: {
    width: 243.628,
    height: 266.77,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    top: 10,
  },
  text: {
    color: "#BED6AF",
    fontWeight: "bold",
  },
  iconStyle: {
    color: "#9AC281",
    marginBottom: "1%",
    top: "0.1%",
    marginRight: 10,
  },
  inputstyle: {
    flexDirection: "row",
    marginRight: "auto",
  },
});
