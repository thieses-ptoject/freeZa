import * as React from "react";
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import { Color, FontSize, Border } from "../../GlobalStyles/password";
import { TextInput } from "react-native-gesture-handler";

const Password = ({navigation}: any) => {
  const [pin, setPin] = React.useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = React.useState(true);

  const handlePinChange = (value: any) => {
    // Allow only numeric input
    const numericValue = value.replace(/[^0-9]/g, '');

    // Limit the input to 8 characters
    const truncatedValue = numericValue.substring(0, 8);

    // Update the PIN state
    setPin(truncatedValue);
  };
  const checkPassword = () => {
    // Replace this condition with your actual password check logic
    if (pin === 'your_actual_password') {
      setIsPasswordCorrect(true);
    } else {
      setIsPasswordCorrect(false);
    }
  };


  return (
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
        maxLength={1}
          style={styles.ellispse01Icon}
        />
        <TextInput
        secureTextEntry={true}
        maxLength={1}
          style={styles.ellispse01Icon1}
        />
        <TextInput
        secureTextEntry={true}
        maxLength={1}
          style={styles.ellispse01Icon2}
        />
        <TextInput
        secureTextEntry={true}
        maxLength={1}
          style={styles.ellispse01Icon3}
        />
        <TextInput
        secureTextEntry={true}
        maxLength={1}
          style={styles.ellispse01Icon4}
        />
        <TextInput
        secureTextEntry={true}
        maxLength={1}
          style={styles.ellispse01Icon5}
        />
        <TextInput
        secureTextEntry={true}
        maxLength={1}
          style={styles.ellispse01Icon6}
        />
        <TextInput
        secureTextEntry={true}
        maxLength={1}
          style={styles.ellispse01Icon7}
        />
      </View>
      </View>
      <View>
        <View>
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
  ellispseIcon: {
    top: 149,
    right: 135,
    bottom: 558,
    left: 135,
  },
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
    color: Color.colorWhite
  },
  ellispse01Icon2: {
    left: 58,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite
  },
  ellispse01Icon3: {
    left: 87,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite
  },
  ellispse01Icon4: {
    left: 116,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite
  },
  ellispse01Icon5: {
    left: 145,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite
    
  },
  ellispse01Icon6: {
    left: 174,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite
  },
  ellispse01Icon7: {
    left: 203,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
    backgroundColor: "#EC4E4E",
    borderRadius: 100,
    color: Color.colorWhite
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
