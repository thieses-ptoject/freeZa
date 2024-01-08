import * as React from "react";
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import { Color, FontSize, Border } from "../../GlobalStyles/password";
import { TextInput } from "react-native-gesture-handler";

const Password = ({navigation}: any) => {
  const [pin, setPin] = React.useState('');
  const handlePinChange = (value:any) => {
    // Allow only numeric input
    const numericValue = value.replace(/[^0-9]/g, '');

    // Limit the input to 8 characters
    const truncatedValue = numericValue.substring(0, 8);

    // Update the PIN state
    setPin(truncatedValue);
  };

  return (
    <View style={styles.wrongPassword}>
      <Image
        style={styles.bubblesIcon}
        source={require("../../assets/password/bubbles.png")}
      />
      <View style={styles.dots}>
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={handlePinChange}
        keyboardType="numeric"
        maxLength={8}
        secureTextEntry
      />
      <View style={styles.pinContainer}>
        {Array.from({ length: 8 }).map((_, index) => (
          <View
            key={index}
            style={[styles.pinDot, { backgroundColor: pin.length > index ? '#2ecc71' : '#ecf0f1' }]}
          />
        ))}
      </View>
    </View>
      </View>
      <Text onPress={()=>navigation.navigate("smsEmail")} style={styles.title}>Forgot your password?</Text>
      <Text style={styles.title1}>Hello, Romina!!</Text>
      <Text style={styles.title2}>Type your password</Text>
      <Image
        style={[styles.ellispseIcon, styles.iconLayout]}
        source={require("../../assets/password/ellispse.png")}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: 0, // Set height to 0 to hide the actual TextInput
    width: 0, // Set width to 0 to hide the actual TextInput
  },
  pinContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  pinDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 5,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.size_base,
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
    fontSize: FontSize.size_3xl_5,
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
    width: 17,
    left: 0,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon1: {
    left: 29,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon2: {
    left: 58,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon3: {
    left: 87,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon4: {
    left: 116,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon5: {
    left: 145,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon6: {
    left: 174,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon7: {
    left: 203,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  dots: {
    top: 390,
    left: 78,
    width: 220,
    height: 17,
    position: "absolute",
  },
  title: {
    top: 445,
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
    position: "absolute",
  },
  ellispseIcon: {
    top: 149,
    right: 135,
    bottom: 558,
    left: 135,
  },
  backgroundIcon: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
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
  },
  time: {
    marginTop: -7,
    fontSize: 14,
    fontWeight: "600",
    left: "0%",
    height: 16,
    color: Color.colorBlack,
    textAlign: "center",
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
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  backgroundBackground: {
    bottom: 0,
  },
  background1: {
    backgroundColor: Color.colorLightgray,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 9,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  dictationIcon: {
    height: 25,
    width: 15,
  },
  emojiIcon: {
    width: 27,
    height: 27,
  },
  rectangleShadowBox1: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorDarkgray,
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  linksTo: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    marginTop: -10,
  },
  return: {
    width: 88,
    right: 0,
  },
  spaceBackground: {
    bottom: 8,
  },
  rectangleShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label1: {
    marginTop: -10.31,
  },
  space: {
    marginLeft: -91.5,
    width: 182,
    left: "50%",
  },
  label2: {
    marginTop: -9,
  },
  view: {
    width: 87,
    left: 0,
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    right: 0,
  },
  symbol: {
    marginTop: -14,
    left: "49.33%",
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    top: "50%",
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  shiftIcon: {
    marginTop: -8.8,
    marginLeft: -9.34,
    width: 19,
    left: "50%",
  },
  shift: {
    left: 0,
  },
  symbol1: {
    left: "20.31%",
  },
  m: {
    right: 55,
    marginTop: -21.5,
    width: 32,
    top: "50%",
  },
  symbol2: {
    left: "26.56%",
  },
  n: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  b: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  v: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  c: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  symbol6: {
    left: "29.69%",
  },
  x: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  z: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  symbol8: {
    left: "32.81%",
  },
  l: {
    right: 18,
  },
  k: {
    marginLeft: 96.5,
    left: "50%",
  },
  symbol10: {
    left: "39.06%",
  },
  j: {
    marginLeft: 59.5,
    left: "50%",
  },
  symbol11: {
    left: "23.44%",
  },
  h: {
    marginLeft: 21.5,
    left: "50%",
  },
  g: {
    marginLeft: -15.5,
    left: "50%",
  },
  f: {
    marginLeft: -53.5,
    left: "50%",
  },
  d: {
    marginLeft: -90.5,
    left: "50%",
  },
  s: {
    marginLeft: -128.5,
    left: "50%",
  },
  a: {
    left: 19,
  },
  p: {
    right: 0,
    top: 0,
  },
  o: {
    right: 37,
    top: 0,
  },
  symbol19: {
    left: "42.19%",
  },
  i: {
    marginLeft: 77.5,
    left: "50%",
    top: 0,
  },
  u: {
    marginLeft: 40.5,
    left: "50%",
    top: 0,
  },
  y: {
    marginLeft: 2.5,
    left: "50%",
    top: 0,
  },
  t: {
    marginLeft: -34.5,
    left: "50%",
    top: 0,
  },
  r: {
    marginLeft: -72.5,
    left: "50%",
    top: 0,
  },
  e: {
    marginLeft: -109.5,
    left: "50%",
    top: 0,
  },
  symbol25: {
    left: "14.06%",
  },
  w: {
    left: 37,
    top: 0,
  },
  q: {
    left: 0,
    top: 0,
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
