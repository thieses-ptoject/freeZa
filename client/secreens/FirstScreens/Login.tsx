import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Color, FontSize, Border } from "../../GlobalStyles/Login"
import { TextInput } from "react-native-gesture-handler";


const Login = ({ navigation } : any) => {

  const [email, setEmail] = React.useState("")
  console.log(email)
  return ( 
    <View style={styles.login}>
      <Image
        style={styles.bubblesIcon}
        source={require("../../assets/login/bubbles.png")}
      />
      <View style={[styles.bar1, styles.barLayout]}>
        <View style={[styles.bar2, styles.bar2Position]} />
      </View>
      <Text style={[styles.title, styles.titleTypo]}>
        Good to see you back!
      </Text>
      <Image
        style={[styles.heartIcon1, styles.iconLayout1]}
        source={require("../../assets/login/heart.png")}
      />
      <Text style={styles.title1}>Login</Text>
      <Text style={[styles.title2, styles.timeFlexBox]}>Cancel</Text>
   
      <View style={styles.form}>
        <TextInput placeholder="Email"  onChange={e=>setEmail(e.nativeEvent.text)} style={styles.emailOrPhone1}></TextInput>
      </View>
      <Pressable onPress={()=>navigation.navigate('password',{email: email})}>
        <View style={[styles.nextButton, styles.nextButtonPosition]}>
          <View style={[styles.nextButtonChild, styles.backgroundIconPosition]} />
          <Text style={[styles.next, styles.timeFlexBox]}>Next</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  barLayout: {
    height: 5,
    width: 134,
  },
  bar2Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleTypo: {
    color: Color.colorGray,
    fontWeight: "300",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  backgroundIconPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    top: "50%",
    overflow: "hidden",
  },
  nextButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  bubblesIcon: {
    top: -209,
    left: -181,
    width: 784,
    height: 1150,
    position: "absolute",
  },
  bar2: {
    borderRadius: 34,
    backgroundColor: Color.colorBlack,
    height: 5,
    width: 134,
  },
  bar1: {
    top: 798,
    left: 121,
    position: "absolute",
  },
  title: {
    marginTop: 97,
    left: "5.33%",
    fontSize: 19,
    lineHeight: 35,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  heartIcon1: {
    height: "1.89%",
    width: "4.25%",
    top: "63.12%",
    right: "38.63%",
    bottom: "35%",
    left: "57.12%",
    position: "absolute",
  },
  title1: {
    top: 438,
    left: 20,
    fontSize: 52,
    letterSpacing: -1,
    fontWeight: "700",
    color: "#78ca46",
    textAlign: "left",
    position: "absolute",
  },
  title2: {
    top: 722,
    left: 166,
    fontSize: 15,
    lineHeight: 26,
    opacity: 0.9,
    color: Color.colorGray,
    fontWeight: "300",
  },
  backgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon1: {
    right: 15,
    width: 24,
    marginTop: -4.67,
    height: 11,
    position: "absolute",
  },
  wifiIcon1: {
    right: 44,
    width: 15,
    marginTop: -4.67,
    height: 11,
    position: "absolute",
  },
  cellularConnectionIcon1: {
    marginTop: -4.33,
    marginLeft: 106.17,
    width: 17,
    height: 11,
    top: "50%",
    overflow: "hidden",
  },
  backgroundIcon1: {
    bottom: 2,
    right: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    marginTop: -7,
    left: "0%",
    fontWeight: "600",
    color: Color.colorBlack,
    height: 16,
    fontSize: FontSize.poppinsMedium14_size,
    top: "50%",
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
    height: 44,
    overflow: "hidden",
  },
  emailOrPhone1: {
    lineHeight: 20,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.poppinsMedium14_size,
    textAlign: "left",
    flex: 1,
  },
  form: {
    top: 555,
    left: 21,
    borderRadius: 59,
    backgroundColor: Color.backgroundGrey,
    width: 334,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    position: "absolute",
  },
  nextButtonChild: {
    borderRadius: Border.br_base,
    backgroundColor: "#f20b32",
  },
  next: {
    marginTop: -14.5,
    left: "42.99%",
    fontSize: FontSize.size_3xl,
    lineHeight: 31,
    color: Color.colorWhitesmoke_100,
    fontWeight: "300",
    textAlign: "center",
    top: "50%",
  },
  nextButton: {
    marginLeft: -167.5,
    top: 661,
    width: 335,
    height: 61,
  },
  login: {
    backgroundColor: "#fff",
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Login;
