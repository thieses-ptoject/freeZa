import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable, Alert } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { Image } from "expo-image";
import { Color, FontSize } from "../../GlobalStyles/Singup";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../../useContext/authContext";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../firebase';


export const Signup = ({ navigation } : any) => {
  const {email, setEmail} = React.useContext(AuthContext)
  const [password, setPassword] = useState("")
  const {phone, setPhone} = React.useContext(AuthContext)
  const [view, setView] = useState(true)
 const {image, setImage} = useContext(AuthContext)

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
      
  <KeyboardAwareScrollView>
 <View style={styles.container}>
  <View style={styles.androidLarge1}>
  <Pressable onPress={()=>navigation.navigate("welcome")}>

    <Text style={styles.title}>Cancel</Text>
  </Pressable>
  
    
    <Pressable style={{zIndex: 0.5, }} onPress={() => { pickImage() }}>
      <Image
        style={styles.uploadPhotoIcon}
        source={require("../../assets/Signup/upload-photo.png")}
      />
    </Pressable>
    
    <Pressable onPress={() => navigation.navigate("completeSignUp", { email: email, password: password, phone: phone })}>
      <View style={styles.button}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={styles.done}>Next</Text>
      </View>
    </Pressable>
    
    <Text style={styles.title1}>
      {`Create 
      Account`}
    </Text>
    
    <View style={[styles.androidLarge1Inner, styles.formParentLayout]}>
      <View style={[styles.formParent, styles.formParentLayout]}>

        <View style={[styles.form1, styles.formSpaceBlock]}>
          <TextInput
            placeholder="Email"
            onChange={(e) => setEmail(e.nativeEvent.text)}
            style={styles.emailOrPhone}
          />
        </View>

        <View style={[styles.form1, styles.formSpaceBlock]}>
          <TextInput
            placeholder="Password"
            secureTextEntry={view}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            style={[styles.password, styles.passwordTypo]}
          />
          <Pressable onPress={() => setView(!view)}>
            <Image
              style={[styles.eyeSlashIcon, styles.iconLayout1]}
              source={require("../../assets/Signup/eyeslash.png")}
            />
          </Pressable>
        </View>

        <View style={[styles.form2, styles.formSpaceBlock]}>
          <View style={styles.frameParent}>
            <View style={styles.frameParent}>
              <View style={styles.flag}>
                <Image
                  style={[styles.englandIcon, styles.iconLayout]}
                  source={require("../../assets/Signup/england.png")}
                />
                <View style={[styles.overlay, styles.bar1Position]} />
              </View>
            </View>
            <View style={styles.frameChild} />
          </View>

          <TextInput
            placeholder="Your number"
            onChange={(e) => setPhone(e.nativeEvent.text)}
            keyboardType="numeric"
            style={[styles.yourNumber, styles.passwordTypo]}
          />
        </View>

      </View>
    </View>

  </View>
</View>
  </KeyboardAwareScrollView>

    );
  };




  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    barLayout: {
        height: 5,
        width: 134,
        position: "absolute",
      },
      bar1Position: {
        left: 0,
        top: 0,
      },
      buttonChildPosition: {
        bottom: 0,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        top: 0,
      },
      formParentLayout: {
        height: 176,
        width: 335,
        position: "absolute",
      },
      formSpaceBlock: {
        marginTop: 7.91,
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Color.backgroundGrey,
        borderRadius: 59,
        width: 335,
      },
      passwordTypo: {
        lineHeight: 20,
        fontSize: FontSize.poppinsMedium14_size,
        color: Color.colorBlack,
        fontWeight: "500",
        textAlign: "left",
      },
      iconLayout1: {
        width: 16,
        height: 16,
      },
      iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
      },
      iconPosition: {
        height: 11,
        top: "50%",
        position: "absolute",
        overflow: "hidden",
      },
      bar1: {
        borderRadius: 34,
        backgroundColor: Color.colorBlack,
        height: 5,
        width: 134,
        position: "absolute",
      },
      bar: {
      margin: "auto",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
      },
      title: {
        top: 719,
        left: 166,
        fontSize: 15,
        lineHeight: 26,
        color: "#202020",
        opacity: 0.9,
        textAlign: "center",
        fontWeight: "300",
        position: "absolute",
      },
      uploadPhotoIcon: {
        top: 281,
        left: 256,
        width: 90,
        height: 90,
        position: "absolute",
        overflow: "hidden",
      },
      buttonChild: {
        borderRadius: 16,
        backgroundColor: "#f20b32",
        position: "absolute",
      },
      done: {
        marginTop: -13.5,
        
        fontSize: 22,
        lineHeight: 31,
        color: "#f3f3f3",
        top: "50%",
        textAlign: "center",
        fontWeight: "300",
        position: "absolute",
        margin: "auto",
        right: 0,
        left: 0,
      },
      button: {
        top: 634,
        height: 61,
        width: 335,
        
        position: "absolute",
        overflow: "hidden",
        left: 20,
      },
      title1: {
        top: 122,
        left: 30,
        fontSize: 50,
        letterSpacing: 0,
        lineHeight: 54,
        fontWeight: "700",
        color: "#78ca46",
        textAlign: "left",
        position: "absolute",
      },
      emailOrPhone: {
        fontSize: 14,
        lineHeight: 18,
        color: Color.colorBlack,
        fontWeight: "500",
        textAlign: "left",
        flex: 1,
      },
      form: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 59,
        alignItems: "center",
        flexDirection: "row",
        height: 52,
        width: 335,
      },
      password: {
        flex: 1,
        lineHeight: 20,
      },
      eyeSlashIcon: {
        marginLeft: 9.88,
        height: 16,
      },
      form1: {
        height: 52,
        marginTop: 7.91,

      },
      englandIcon: {
        height: "111.11%",
        width: "125%",
        top: "-5.56%",
        right: "-12.5%",
        bottom: "-5.56%",
        left: "-12.5%",
        borderRadius: 4,
      },
      overlay: {
        width: 32,
        height: 24,
        position: "absolute",
      },
      flag: {
        borderRadius: 2,
        height: 18,
        width: 24,
        overflow: "hidden",
      },
      arrowDownIcon: {
        marginLeft: 7.91,
        height: 16,
      },
      frameParent: {
        alignItems: "center",
        flexDirection: "row",
      },
      frameChild: {
        borderStyle: "solid",
        borderColor: Color.colorGray_100,
        borderRightWidth: 1,
        width: 1,
        height: 25,
        marginLeft: 15.81,
      },
      yourNumber: {
        width: 205,
        marginLeft: 15.81,
      },
      form2: {
        height: 55,
      },
      formParent: {
        left: 0,
        top: 0,
      },
      androidLarge1Inner: {
        top: 406,
        left: 20,
        height: 176,
      },
      backgroundIcon: {
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
      },
      batteryIcon: {
        right: 15,
        marginTop: -4.67,
        height: 11,
        width: 24,
      },
      wifiIcon: {
        right: 44,
        width: 15,
        marginTop: -4.67,
        height: 11,
      },
      cellularConnectionIcon: {
        marginTop: -4.33,
        marginLeft: 106.17,
        left: "50%",
        width: 17,
      },
      backgroundIcon1: {
        bottom: 2,
        right: 0,
        maxHeight: "100%",
        maxWidth: "100%",
        left: 0,
        top: 0,
      },
      time: {
        marginTop: -7.41,
        left: "0%",
        fontWeight: "600",
        color: Color.colorBlack,
        height: 16,
        fontSize: FontSize.poppinsMedium14_size,
        top: "50%",
        textAlign: "center",
        position: "absolute",
        width: "100%",
      },
      barsTimeBlack: {
        height: "40.91%",
        width: "14.4%",
        top: "29.55%",
        right: "80%",
        bottom: "29.55%",
        left: "5.6%",
        position: "absolute",
        overflow: "hidden",
      },
      barsstatusBarlightStatusB: {
        width: 375,
        height: 46,
        position: "absolute",
        overflow: "hidden",
      },
      androidLarge1: {
        backgroundColor: "#fff",
        height: 812,
        overflow: "hidden",
        width: "100%",
        flex: 1,
      },
      
  });
  