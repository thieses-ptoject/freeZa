import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Color, } from "../../GlobalStyles/PasswordRecoveryCode";

const PasswordRecoveryCode = ({navigation}: any) => {
  return (
    <View style={styles.passwordRecoveryCode}>
      <Image
        style={styles.bubblesIcon}
        contentFit="cover"
        source={require("../../assets/passwordRecoveryCode/bubbles.png")}
      />
      <Text style={[styles.title, styles.titleFlexBox]}>Cancel</Text>
      <View style={[styles.dots, styles.dotsLayout]}>
        <Image
          style={[styles.ellispse01Icon, styles.bar1Position]}
          contentFit="cover"
          source={require("../../assets/passwordRecoveryCode/ellispse-01.png")}
        />
        <Image
          style={[styles.ellispse01Icon1, styles.ellispse01IconLayout]}
          contentFit="cover"
          source={require("../../assets/passwordRecoveryCode/ellispse-01.png")}
        />
        <Image
          style={[styles.ellispse01Icon2, styles.ellispse01IconLayout]}
          contentFit="cover"
          source={require("../../assets/passwordRecoveryCode/ellispse-01.png")}
        />
        <Image
          style={[styles.ellispse01Icon3, styles.buttonPosition]}
          contentFit="cover"
          source={require("../../assets/passwordRecoveryCode/ellispse-01.png")}
        />
      </View>
      <Text style={[styles.title1, styles.title1Clr]}>+98*******00</Text>
      <Text style={[styles.enter4DigitsCode, styles.title1Clr]}>
        Enter 4-digits code we sent you on your phone number
      </Text>
      <Text style={[styles.title2, styles.titleFlexBox]}>
        Password Recovery
      </Text>
      <Image
        style={[styles.ellispseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/passwordRecoveryCode/ellispse.png")}
      />
      <Image
        style={[styles.imageIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/passwordRecoveryCode/image.png")}
      />
      <View style={[styles.bar, styles.barLayout]}>
        <View style={[styles.bar1, styles.barLayout]} />
      </View>
      <Pressable onPress={()=>navigation.navigate("resetPassword")}>
          <View style={[styles.button, styles.buttonPosition]}>
            <View style={[styles.buttonChild, styles.buttonChildPosition]} />
            <Text style={[styles.sendAgain, styles.timePosition]}>Send Again</Text>
          </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "center",
    color: Color.colorGray,
    position: "absolute",
  },
  dotsLayout: {
    height: 17,
    position: "absolute",
  },
  bar1Position: {
    left: 0,
    top: 0,
  },
  ellispse01IconLayout: {
    top: 0,
    width: 17,
    height: 17,
  },
  buttonPosition: {
    left: 87,
    position: "absolute",
  },
  title1Clr: {
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  barLayout: {
    height: 5,
    width: 134,
    position: "absolute",
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
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  bubblesIcon: {
    top: -273,
    left: 20,
    width: 556,
    height: 535,
    position: "absolute",
  },
  title: {
    top: 719,
    left: 166,
    fontSize: 15,
    lineHeight: 26,
    opacity: 0.9,
    fontWeight: "300",
  },
  ellispse01Icon: {
    width: 17,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon1: {
    left: 29,
    width: 17,
    position: "absolute",
  },
  ellispse01Icon2: {
    left: 58,
    width: 17,
    position: "absolute",
  },
  ellispse01Icon3: {
    width: 17,
    top: 0,
    height: 17,
  },
  dots: {
    top: 424,
    left: 136,
    width: 104,
  },
  title1: {
    top: 371,
    left: 130,
    fontSize: 16,
    letterSpacing: 2,
    lineHeight: 25,
    fontWeight: "700",
  },
  enter4DigitsCode: {
    top: 301,
    left: 43,
    fontSize: 19,
    lineHeight: 27,
    width: 290,
    height: 57,
    fontWeight: "300",
  },
  title2: {
    top: 266,
    left: 92,
    fontSize: 21,
    letterSpacing: 0,
    lineHeight: 30,
    fontWeight: "700",
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
  bar1: {
    borderRadius: 34,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  bar: {
    top: 798,
    left: 121,
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
    fontSize: 14,
    fontWeight: "600",
    color: Color.colorWhite,
    height: 16,
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
    position: "absolute",
    overflow: "hidden",
  },
  buttonChild: {
    borderRadius: 16,
    backgroundColor: "#f20b32",
  },
  sendAgain: {
    marginTop: -15.27,
    left: "21.89%",
    fontSize: 22,
    lineHeight: 31,
    color: "#f3f3f3",
    fontWeight: "300",
  },
  button: {
    top: 640,
    width: 201,
    height: 50,
    overflow: "hidden",
  },
  passwordRecoveryCode: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PasswordRecoveryCode;
