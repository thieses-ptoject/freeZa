import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, Image, View,SafeAreaView,TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles/UserProfil";


const FormContainer = () => {

const [data,steData]=useState()

  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.details}>
    
          <SafeAreaView style={[styles.view, styles.viewLayout1]} >
          
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/lovesvgrepocom-1.png")}
            />
           
            <Text style={[styles.notifications, styles.notificationsTypo]}>
            My favourite Items
            </Text>
            <Image
              style={[styles.fill1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/fill-1.png")}
            />
            
          </SafeAreaView>
    
 
    
          <View style={[styles.view1, styles.viewLayout1]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/cassette2svgrepocom.png")}
          />
            <Text style={[styles.security, styles.securityTypo]}>
              My saved searches
            </Text>
            <Image
              style={[styles.fill1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/fill-1.png")}
            />
          </View>
    
    
          <View style={[styles.view2, styles.viewLayout1]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/image-3-1.png")}
          />
            <Text style={[styles.notifications, styles.notificationsTypo]}>
              Geevers I follow
            </Text>
            <Image
              style={[styles.fill1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/fill-1.png")}
            />
          </View>
    
          
          <View style={[styles.view3, styles.viewLayout1]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/term.png")}
            />
            <Text
              style={[styles.termsConditions, styles.notificationsTypo]}>
                Terms & Conditions
            </Text>
            <Image
              style={[styles.fill1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/fill-1.png")}
            />
          </View>
    
    
        
          
          <View style={[styles.view4, styles.viewLayout1]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/icon.png")}
            />
            <Text style={[styles.helpCenter, styles.securityTypo]}>
              Help Center
            </Text>
            <Image
              style={[styles.fill1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/fill-1.png")}
            />
          </View>
    
    
    
          <View style={[styles.view5,  styles.viewLayout1]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/inv.png")}
            />
            <Text style={[styles.notifications, styles.notificationsTypo]}>
              Intive Friends
            </Text>
            <Image
              style={[styles.fill1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/fill-1.png")}
            />
          </View>
    
          
          <View style={[styles.view6, styles.viewLayout1]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/stroke-1.png")}
            />
            <Text style={[styles.notifications, styles.notificationsTypo]}>
              Logout
            </Text>
            <Image
              style={[styles.fill1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/account/fill-1.png")}
            />
            
          </View>
        
   </View>
  </ScrollView>
);
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 3,
    paddingBottom: 2,
    
  },

  viewLayout1: {
    height: 20,
    position: "absolute",
  },
  notificationsTypo: {
    textAlign: "left",
    color: Color.colorHotpink_200,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: "50%",
    marginTop: -10,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  viewLayout: {
    width: 301,
    position: "absolute",
  },
  securityTypo: {
    left: "10.3%",
    textAlign: "left",
    color: Color.colorHotpink_200,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: "50%",
    position: "absolute",
  },
  fill1IconPosition: {
    left: "96.35%",
    width: "3.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0.24%",
    position: "absolute",
  },
  viewPosition: {
    left: 11,
    height: 20,
    width: 300,
    position: "absolute",
  },
  notifications: {
    left: "10%",
  },
  fill1Icon: {
    width: "3.43%",
    left: "96.33%",
    bottom: "0.11%",
    right: "0.24%",
    top: "10%",
    height: "59.89%",
    maxWidth: "100%",
  },
  security: {
    marginTop: -10.5,
  },
  // fill1Icon1: {
  //   height: "85.61%",
  //   top: "9.52%",
  //   bottom: "4.87%",
  // },

  // fill1Icon3: {
  //   width: 16,
  //   height: 18,
  // },
  termsConditions: {
    left: "9.4%",
  },
  // fill1Icon4: {
  //   width: "3.45%",
  //   left: "96.31%",
  //   bottom: "0.11%",
  //   right: "0.24%",
  //   top: "10%",
  //   height: "89.89%",
  //   maxWidth: "100%",
  // },

  // loveSvgrepoCom1Icon: {
  //   top: 0,
  //   left: 4,
  //   width: 27,
  //   height: 27,
  //   overflow: "hidden",
  //   position: "absolute",
  // },
  icon: {
    height: "100.01%",
    width: "7.64%",
    top: "0%",
    right: "94.02%",
    bottom: "-0.01%",
    left: "-1.66%",
  },
  helpCenter: {
    marginTop: -9.5,
  },
  // fill1Icon5: {
  //   height: "78.16%",
  //   top: "17.39%",
  //   bottom: "4.44%",
  // },
  // fill1Icon6: {
  //   width: 20,
  //   height: 18,
  // },

  // stroke1Icon: {
  //   width: 18,
  //   height: 17,
  // },
  // image31: {
  //   top: 105,
  //   left: 0,
  //   width: 32,
  //   height: 43,
  //   position: "absolute",
  // },
  details: {
    top: 134,
    left: 52,
   
  },
  rec :{
 backgroundColor: "#FFDAE9",
 width: 206,
 height: 34,
 flexshrink: 0


  },

  view: {
  top: 30,
  width: 300,
  left: 17,
},
view1: {
  top: 80,
  width: 300,
  left: 17,
 
},
view2: {
  top: 130,
  width: 300,
  left: 17,
  height: 20,
},
view3: {
  top: 180,
  width: 300,
  left: 17,
  height: 20,
},
view4: {
  top: 230,
  width: 300,
  left: 17,
  height: 20,
},
view5: {
  top: 280,
  width: 300,
  left: 17,
  height: 20,
},
view6: {
  top: 330,
  width: 300,
  left: 17,
  height: 20,
},
});

export default FormContainer;
