import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Color, FontSize, Border } from "../../GlobalStyles/password";
import { TextInput } from "react-native-gesture-handler";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { AuthContext } from "../../useContext/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkUser } from "../../React-query/user/otherUserProfil"; //iyed
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import config from "../../config.json";
import { useFocusEffect } from "@react-navigation/native";
const Password = ({ navigation, route }: any) => {
  const { auth, setAuth } = React.useContext(AuthContext);
  const [isPasswordCorrect, setIsPasswordCorrect] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(""); // New state for error message
  const { email, setEmail } = React.useContext(AuthContext);
  const { name, setName } = React.useContext(AuthContext);
  const { LastName, setLastName } = React.useContext(AuthContext);
  const { phone, setPhone, image } = React.useContext(AuthContext);
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const [banned, setBanned] = React.useState(false);
  const [userImage, setUserImage] = React.useState(
    "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
  );
  const [userName, setUserName] = React.useState("");
  const Fauth = getAuth(app);

  console.log(banned, "sjqkldjqsdsqdkjqskdljqskdqslkskkkkkkkkkkkkkkkkkkkk");

  const checkBan = async () => {
    try {
      const response = await axios.get(
        `http://${config.ip}:3001/user/${email}`
      );
      console.log(response.data.blocked);
      setBanned(response.data.blocked);
      if (response.data.firstName || response.data.image) {
        setUserName(response.data.firstName);
        setUserImage(response.data.image);
      }
      if (banned) {
        Alert.alert(
          "Sorry, your account has been banned. Please contact support for assistance."
        );
        navigation.navigate("login");
      }
      if (!response.data) {
        Alert.alert("Sorry your account does not exist");
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      checkBan();
    }, [banned])
  );
  const login = () => {
    signInWithEmailAndPassword(Fauth, route.params.email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        storeData(user.uid);
        setAuth(true);
        setIsAuthenticated(true);
        AsyncStorage.setItem("auth", "true");
        // mutate(email) // iyed
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getFirebaseErrorMessage(errorCode);
        console.log(errorMessage);
        setErrorMessage(errorMessage);
      });
  };
  const getFirebaseErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "Invalid email. User not found.";
      case "auth/wrong-password":
        return "Invalid password. Please try again.";
      case "auth/invalid-email":
        return "Invalid email. Please enter a valid email address.";
      default:
        return "An error occurred. Please try again.";
    }
  };
  const storeData = async (id: string) => {
    try {
      const user = {
        email,
        name,
        LastName,
        phone,
        id,
        image,
      };
      const jsonUser = JSON.stringify(user);
      await AsyncStorage.setItem("user", jsonUser);
      const value = await AsyncStorage.getItem("user");
      console.log(
        value,
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.wrongPassword}>
        <Image
          style={styles.bubblesIcon}
          source={require("../../assets/password/bubbles.png")}
        />
        <View style={styles.wrongPassword}>
          <Image
            style={styles.bubblesIcon}
            source={require("../../assets/password/bubbles.png")}
          />
          <View style={styles.dots}>
            <TextInput
              secureTextEntry={true}
              maxLength={32}
              style={styles.ellispse01Icon}
              onChange={(e) => setPassword(e.nativeEvent.text)}
              editable={!banned}
            />
            {errorMessage !== "" && (
              <Text style={styles.errorMessage}>{errorMessage} </Text>
            )}
            <View style={styles.button}>
              <View style={[styles.buttonChild, styles.buttonChildPosition]} />
              <Pressable
                onPress={() => {
                  console.log("hi");
                  login();
                }}
              >
                <Text style={styles.done}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <Text
          onPress={() => navigation.navigate("smsEmail")}
          style={styles.title}
        >
          Forgot your password?
        </Text>
        <Text style={styles.title1}>Hello, {userName}!!</Text>
        <Text style={styles.title2}>Type your password</Text>
        <Image
          style={[styles.ellispseIcon, styles.iconLayout]}
          source={{
            uri: userImage,
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    width: 500,
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    position: "absolute",
    top: "700%",
  },
  done: {
    left: "42.39%",
    fontSize: 22,
    lineHeight: 31,
    color: "#f3f3f3",
    top: 10,
    textAlign: "center",
    fontWeight: "300",
    position: "absolute",
  },
  buttonChildPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  button: {
    width: 335,
    position: "relative",
    marginTop: 60,
    height: 61,
  },
  buttonChild: {
    borderRadius: 16,
    backgroundColor: "#f20b32",
    position: "absolute",
  },
  ellispseIcon: {
    top: 149,
    right: 135,
    height: 100,
    width: 100,
    left: 135,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    height: 0, // Set height to 0 to hide the actual TextInput
    width: 0, // Set width to 0 to hide the actual TextInput
  },
  pinContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  pinDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 5,
  },
  iconLayout: {
    position: "absolute",
    borderRadius: 100,
  },
  keyboardAlphabeticPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    height: 16,
    top: "50%",
    position: "absolute",
  },
  backgroundPosition: {
    backgroundColor: Color.colorGray_300,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewPosition: {
    height: 42,
    marginTop: 32.5,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  labelLayout: {
    height: 21,
    lineHeight: 21,
    left: "0%",
    top: "50%",
    color: Color.colorBlack,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  shiftPosition: {
    width: 42,
    marginTop: -21.5,
    height: 42,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  mLayout: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
  },
  symbolTypo: {
    marginTop: -15,
    letterSpacing: -1,
    top: "50%",
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  nPosition: {
    marginLeft: 59.5,
    left: "50%",
  },
  bPosition: {
    marginLeft: 21.5,
    left: "50%",
  },
  vPosition: {
    marginLeft: -15.5,
    left: "50%",
  },
  cPosition: {
    marginLeft: -53.5,
    left: "50%",
  },
  xPosition: {
    marginLeft: -90.5,
    left: "50%",
  },
  zPosition: {
    marginLeft: -128.5,
    left: "50%",
  },
  lPosition: {
    marginTop: -75.5,
    width: 32,
    height: 42,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipsePosition: {
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  bubblesIcon: {
    top: -208,
    left: -196,
    width: 519,
    height: 573,
    position: "absolute",
  },
  ellispse01Icon: {
    width: 230,
    left: 0,
    top: 0,
    textAlign: "center",
    height: 30,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite,
  },
  ellispse01Icon1: {
    left: 29,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite,
  },
  ellispse01Icon2: {
    left: 58,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite,
  },
  ellispse01Icon3: {
    left: 87,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite,
  },
  ellispse01Icon4: {
    left: 116,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite,
  },
  ellispse01Icon5: {
    left: 145,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite,
  },
  ellispse01Icon6: {
    left: 174,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite,
  },
  ellispse01Icon7: {
    left: 203,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite,
  },
  dots: {
    top: 390,
    left: 78,
    width: 220,
    height: 17,
    position: "absolute",
    alignItems: "center",
  },
  title: {
    top: 550,
    left: 112,
    fontSize: 15,
    lineHeight: 26,
    textAlign: "center",
    color: Color.colorGray_200,
    fontWeight: "300",
    position: "absolute",
  },
  title1: {
    top: 282,
    left: 88,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorGray_200,
    position: "absolute",
  },
  title2: {
    top: 348,
    left: 104,
    fontSize: 19,
    lineHeight: 35,
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "300",
  },

  keys: {
    top: 8,
    right: 3,
    bottom: 24,
    left: 3,
    position: "absolute",
    overflow: "hidden",
  },
  keyboardAlphabetic: {
    top: 521,
    height: 291,
  },
  ellipse: {
    marginTop: -85,
    left: 211,
    width: 40,
    height: 40,
  },
  ellipseIcon: {
    marginTop: -245,
    width: "19.73%",
    right: "40%",
    left: "40.27%",
    height: 81,
    maxWidth: "100%",
    top: "50%",
  },
  wrongPassword: {
    backgroundColor: "#fff",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Password;
