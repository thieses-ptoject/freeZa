import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color,  FontSize, Border } from "../../GlobalStyles/resetPassword";
import { TextInput } from "react-native-gesture-handler";

const NewPassword = () => {
  return (
    <View style={styles.newPassword}>
      <Image
        style={styles.bubblesIcon}
        contentFit="cover"
        source={require("../../assets/resetPassword/bubbles.png")}
      />
      <Text style={styles.title}>Setup New Password</Text>
      <Image
        style={[styles.ellispseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/resetPassword/ellispse.png")}
      />
      <Image
        style={[styles.imageIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/resetPassword/image.png")}
      />

      <View style={[styles.repeatPassword, styles.passwordLayout]}>
        <View style={[styles.repeatPasswordChild, styles.timePosition]} />
        <TextInput  placeholder="Repeat Password" style={[styles.title1, styles.titleTypo]}></TextInput>
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <View style={[styles.repeatPasswordChild, styles.timePosition]} />
        <TextInput placeholder="New Password" style={[styles.title2, styles.titleTypo]}></TextInput>
      </View>
      <Text style={[styles.title3, styles.saveTypo]}>Cancel</Text>
      <TextInput style={[styles.pleaseSetupA, styles.saveTypo]}>
        Please, setup a new password for your account
      </TextInput>
      <View style={styles.button}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  buttonChildPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  passwordLayout: {
    height: 50,
    width: 335,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 21,
    marginTop: -10,
    top: "50%",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  saveTypo: {
    fontWeight: "300",
    textAlign: "center",
    position: "absolute",
  },
  bubblesIcon: {
    top: -273,
    width: 556,
    height: 535,
    left: 20,
    position: "absolute",
  },
  title: {
    top: 266,
    left: 84,
    fontSize: 21,
    lineHeight: 30,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorGray,
    letterSpacing: 0,
    position: "absolute",
  },
  ellispseIcon: {
    top: 149,
    right: 135,
    bottom: 558,
    left: 135,
    position: "absolute",
  },
  imageIcon: {
    height: "11.21%",
    width: "24.27%",
    top: "19.21%",
    right: "37.87%",
    bottom: "69.58%",
    left: "37.87%",
    position: "absolute",
  },
  backgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 15,
    width: 24,
    marginTop: -4.67,
    height: 11,
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
    left: 0,
    top: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    marginTop: -7,
    fontSize: 14,
    fontWeight: "600",
    color: Color.colorWhite,
    height: 16,
    top: "50%",
    textAlign: "center",
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
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  repeatPasswordChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  title1: {
    left: "29.85%",
  },
  repeatPassword: {
    top: 441,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  title2: {
    left: "32.84%",
  },
  password: {
    top: 381,
  },
  title3: {
    top: 719,
    left: 166,
    fontSize: 15,
    lineHeight: 26,
    opacity: 0.9,
    color: Color.colorGray,
  },
  pleaseSetupA: {
    top: 301,
    left: 43,
    fontSize: 19,
    lineHeight: 27,
    color: "#000",
    width: 290,
    height: 57,
  },
  buttonChild: {
    borderRadius: 16,
    backgroundColor: "#f20b32",
  },
  save: {
    marginTop: -14.5,
    left: "42.99%",
    fontSize: 22,
    lineHeight: 31,
    color: "#f3f3f3",
    top: "50%",
  },
  button: {
    top: 634,
    height: 61,
    width: 335,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  newPassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default NewPassword;
