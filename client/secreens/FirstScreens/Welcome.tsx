import React from "react";
import { View, Text, StyleSheet, Image, Button, Pressable, Alert } from "react-native";
import Svg, { Defs, Path, Pattern } from "react-native-svg";
import DropShadow from "react-native-drop-shadow";
import { Shadow } from "react-native-shadow-2";

export const Welcome = ({ navigation } : any) => {
  return (
    <View>
      <Svg
        style={styles.redSvg}
        width={241}
        height={172}
        viewBox="0 0 241 172"
        fill="none"
      >
        <Path
          d="M162.205 115.865C129.183 245.198 -32.9372 119.774 -55.0377 23.6511C-77.1381 -72.4717 -48.2777 -159.066 37.1762 -193.591C122.63 -228.117 192.435 -170.806 230.129 -95.4164C267.824 -20.0273 195.226 -13.4676 162.205 115.865Z"
          fill="#F20B32"
        />
      </Svg>
      <Svg
        style={styles.greenSvg}
        width="80"
        height="233"
        viewBox="0 0 80 233"
        fill="none"
      >
        <Path
          d="M122.23 -10.027C179.747 -88.2618 243.628 44.3248 243.628 111.371C243.628 178.418 189.276 232.77 122.23 232.77C55.1834 232.77 -8.01705 181.723 0.831575 111.371C9.6802 41.0195 64.7126 68.2077 122.23 -10.027Z"
          fill="#78CA46"
        />
      </Svg>
      <View style={styles.container}>
        <View style={styles.doura}>
          <Image
            style={styles.freeza}
            source={require("../../assets/freeza.png")}
          />
        </View>
        <View>
          <Text style={styles.text}>FreeZa</Text>
        </View>
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}> The More We Share The More We Have</Text>
        </View>

        <View style={styles.buttonContainer}>
        
      <View>
          <Text onPress={()=>navigation.navigate('signup')} style={styles.buttonText}> Let's get started</Text>
      </View>
        </View>
       <View style= {styles.nextPageContainer}>
        <Text style= {styles.textToNextPage} >I already have an account?</Text>

        <Pressable onPress={()=>Alert.alert("hi")}>
            <Image
            
                style={styles.freeza}
                source={require("../../assets/Button.png")}
              />
        </Pressable>
        </View> 
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    nextPage :{
        marginLeft: "4%",
        backgroundColor: "#F20B32CC",
        height: 30,
        width: 30,
        borderRadius: 100,
        
     
    },
    nextPageContainer : {
        marginTop : "12%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    textToNextPage : {  
        fontSize: 15,
        fontWeight: "300"
    },
    buttonContainer: {
        paddingHorizontal: "25%",
        paddingVertical: "4%",
        backgroundColor: "#F20B32",
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "12%"
        },
        buttonText: {
        color: "#fff",
        fontSize: 16,
        },
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  quoteContainer: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12%",
  },
  quote: {
    textAlign: "center",
    fontSize: 19,
    color: "#BBBBBB",
  },
  text: {
    color: "#78CA46",
    fontSize: 52,
    textAlign: "center",
    marginTop: "2%",
   fontWeight:"700",
  },
  doura: {
    backgroundColor: "#FFECF6",
    height: 200,
    width: 200,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginLeft: "auto",
    marginRight: "auto",
  },
  circle: {
    marginLeft: 100,
  },
  elevation: {
    width: 207,
    height: 194,
    backgroundColor: "#FFECF6",
    color: "#000", // Set the shadow color to #FFECF6
    borderRadius: 100,
    border: 10,
    radius: 10,
    opacity: 0.2,
    x: 0,
    y: 3,
  },
  redSvg: {
    width: 311.014,
    height: 367.298,
    transform: [{ rotate: "0deg" }],
    flexShrink: 0,
  },
  greenSvg: {
    width: 243.628,
    height: 266.77,
    flexShrink: 0,
    position: "absolute",
    right: 0,
    top: 10,
  },
  freeza: {
    position: "relative",
    marginLeft: 23,
  },
});

