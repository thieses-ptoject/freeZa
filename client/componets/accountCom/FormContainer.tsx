import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable,Share } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles/UserProfil";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
// import * as Sharing from 'expo-sharing';
import { log } from "console";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../useContext/authContext";
import { useNavigation } from "@react-navigation/native";

const FormContainer = ({ navigation }: any) => {
  const{ setIsAuthenticated}=React.useContext(AuthContext)
  const navigationn = useNavigation();
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      // navigation.navigate('Welcome')
      console.log("AsyncStorage cleared successfully!");
    } catch (error) {
      console.error("Error clearing AsyncStorage: ", error);
    }
  };
const shareText = async (text:string) => {
  try {
      await Share.share({
          message: text
      });
  } catch (error) {
      console.error('Error sharing:', error);
  }
};

const handleLogout = () => {
  setIsAuthenticated(false);
  clearAsyncStorage();
}

  return (
    <View style={styles.details}>
      <Pressable >
        <View style={[styles.view, styles.viewLayout1]}>
        <View style={[styles.icon, styles.iconLayout]}>
            <Ionicons name="heart-outline" size={22} color="#FC5A8D" />
          </View>
          <Text style={[styles.notifications, styles.notificationsTypo]}>
            My favourite Items
          </Text>
          <Image
            //  onPress={() =>navigation.navigate("Wishlist")}
            style={[styles.fill1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/fill-1.png")}
          />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("MySavedSearch")}>
        <View style={[styles.view1, styles.viewLayout1]}>
          <View style={[styles.icon, styles.iconLayout]}>
            <Ionicons name="briefcase-eye-outline" size={20} color="#FC5A8D" />
          </View>
          <Text style={[styles.security, styles.securityTypo]}>
            My saved searches
          </Text>
          <Image
            style={[styles.fill1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/fill-1.png")}
          />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("GeeversIfllow")}>
        <View style={[styles.view2, styles.viewLayout1]}>
          <View style={[styles.icon, styles.iconLayout]}>
            <Ionicons name="account-heart-outline" size={25} color="#FC5A8D" />
          </View>

          <Text style={[styles.notifications, styles.notificationsTypo]}>
            Geevers I follow
          </Text>
          <Image
            style={[styles.fill1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/fill-1.png")}
          />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("TermAndConditions")}>
        <View style={[styles.view3, styles.viewLayout1]}>
          <View style={[styles.icon, styles.iconLayout]}>
            <Ionicons name="shield-key-outline" size={20} color="#FC5A8D" />
          </View>
          <Text style={[styles.termsConditions, styles.notificationsTypo]}>
            Terms & Conditions
          </Text>
          <Image
            style={[styles.fill1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/fill-1.png")}
          />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("HelpCenter")}>
        <View style={[styles.view4, styles.viewLayout1]}>
        <View style={[styles.icon, styles.iconLayout]}>
            <Ionicons name="help-circle-outline" size={22} color="#FC5A8D" />
          </View>
          <Text style={[styles.helpCenter, styles.securityTypo]}>
            Help Center
          </Text>
          <Image
            style={[styles.fill1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/fill-1.png")}
          />
        </View>
      </Pressable>

      <Pressable   onPress={()=>{
        console.log('hello');
        shareText('hello')
        }}>
        <View style={[styles.view5, styles.viewLayout1]}>
        <View style={[styles.icon, styles.iconLayout]}>
            <Ionicons name="account-multiple-plus-outline" size={22} color="#FC5A8D" />
          </View>
          <Text style={[styles.notifications, styles.notificationsTypo]}>
            Intive Friends
          </Text>
          <Image
            style={[styles.fill1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/fill-1.png")}
          />
        </View>
      </Pressable>

      <Pressable onPress={handleLogout}>
        <View style={[styles.view6, styles.viewLayout1]}>
        <View style={[styles.icon, styles.iconLayout]}>
            <Ionicons name="account-arrow-left-outline" size={22} color="#FC5A8D" />
          </View>
          <Text style={[styles.notifications, styles.notificationsTypo]}>
            Logout
          </Text>
          <Image
            style={[styles.fill1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/account/fill-1.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};
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
    // fontFamily: FontFamily.mulishBold,
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
    // fontFamily: FontFamily.mulishBold,
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

  termsConditions: {
    left: "9.4%",
  },

  icon: {
    height: "100.01%",
    width: "7.64%",
    top: "-22%",
    right: "94.02%",
    bottom: "-0.01%",
    left: "-1.66%",
  },
  helpCenter: {
    marginTop: -9.5,
  },

  details: {
    top: 134,
    left: 52,
  },
  rec: {
    backgroundColor: "#FFDAE9",
    width: 206,
    height: 34,
    flexshrink: 0,
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
