import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontSize } from "../../GlobalStyles/SmsEmail";

const SmsEmail = ({navigation}:any) => {
  return (
    <View style={styles.passwordRecovery}>
      <Image
        style={[styles.bubblesIcon, styles.buttonPosition]}
        contentFit="cover"
        source={require("../../assets/smsEmail/bubbles.png")}
      />
      <Text style={[styles.title, styles.titleFlexBox]}>Cancel</Text>
      <View style={[styles.sms, styles.smsLayout]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.title1, styles.titleClr]}>SMS</Text>
        <Image
          style={[styles.checkIcon, styles.checkIconLayout]}
          contentFit="cover"
          source={require("../../assets/smsEmail/check.png")}
        />
      </View>
      <View style={[styles.email, styles.smsLayout]}>
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
        <Text style={[styles.title2, styles.titleClr]}>Email</Text>
        <Image
          style={[styles.checkEmptyIcon, styles.checkIconLayout]}
          contentFit="cover"
          source={require("../../assets/smsEmail/check-empty.png")}
        />
      </View>
      <Text style={[styles.howYouWould, styles.titleClr]}>
        How you would like to restore your password?
      </Text>
      <Text style={[styles.title3, styles.titleTypo]}>Password Recovery</Text>
      <Image
        style={[styles.ellispseIcon, styles.checkIconLayout]}
        contentFit="cover"
        source={require("../../assets/smsEmail/ellispse.png")}
      />
      <Image
        style={[styles.imageIcon, styles.checkIconLayout]}
        contentFit="cover"
        source={require("../../assets/smsEmail/image.png")}
      />
      <View style={styles.barsstatusBarlightStatusB}>
        <Image
          style={[styles.backgroundIcon, styles.buttonChildPosition]}
          contentFit="cover"
          source={require("../../assets/smsEmail/background.png")}
        />
        <View style={styles.barsTimeBlack}>
          <Image
            style={styles.backgroundIcon1}
            contentFit="cover"
            source={require("../../assets/smsEmail/background1.png")}
          />
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Pressable onPress={()=>navigation.navigate("passwordRecoveryCode")}>
      <View style={[styles.button, styles.buttonPosition]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
       
          <Text style={[styles.next, styles.titleFlexBox]}>Next</Text>

      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: 20,
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  smsLayout: {
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    borderRadius: Border.br_lg,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  titleClr: {
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  checkIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  titleTypo: {
    fontWeight: "700",
    letterSpacing: 0,
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
  bubblesIcon: {
    top: -273,
    width: 556,
    height: 535,
  },
  title: {
    top: 719,
    left: 166,
    lineHeight: 26,
    opacity: 0.9,
    color: Color.colorGray,
    textAlign: "center",
    fontWeight: "300",
    fontSize: FontSize.size_mini,
  },
  rectangle: {
    backgroundColor: "#e1f2d7",
  },
  title1: {
    left: "42.21%",
    lineHeight: 19,
    fontWeight: "700",
    letterSpacing: 0,
    top: "50%",
    marginTop: -9,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
  },
  checkIcon: {
    width: "11.06%",
    right: "5.03%",
    left: "83.92%",
    bottom: "22.5%",
    top: "22.5%",
    height: "55%",
    maxWidth: "100%",
    position: "absolute",
  },
  sms: {
    top: 386,
    left: 88,
    width: 199,
  },
  rectangle1: {
    backgroundColor: "#ffebeb",
  },
  title2: {
    left: "40.4%",
    fontWeight: "500",
    letterSpacing: 0,
    color: Color.colorBlack,
    top: "50%",
    marginTop: -9,
    fontSize: FontSize.size_mini,
  },
  checkEmptyIcon: {
    width: "11.11%",
    right: "5.05%",
    left: "83.84%",
    bottom: "22.5%",
    top: "22.5%",
    height: "55%",
    maxWidth: "100%",
    position: "absolute",
  },
  email: {
    top: 436,
    left: 89,
    width: 198,
  },
  howYouWould: {
    top: 301,
    left: 43,
    fontSize: 19,
    lineHeight: 27,
    width: 290,
    height: 57,
    fontWeight: "300",
  },
  title3: {
    top: 266,
    left: 92,
    fontSize: 21,
    lineHeight: 30,
    textAlign: "center",
    position: "absolute",
    color: Color.colorGray,
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
    left: "0%",
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
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  buttonChild: {
    borderRadius: 16,
    backgroundColor: "#f20b32",
  },
  next: {
    marginTop: -14.5,
    left: "42.99%",
    fontSize: 22,
    lineHeight: 31,
    color: "#f3f3f3",
    top: "50%",
    fontWeight: "300",
  },
  button: {
    top: 634,
    width: 335,
    height: 61,
    overflow: "hidden",
  },
  passwordRecovery: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SmsEmail;
