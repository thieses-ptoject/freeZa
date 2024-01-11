import React from "react";
import { getUserData } from "../../React-query/user/profileUser";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles/UserProfil";
import FormContainer from "../../componets/accountCom/FormContainer";


const Account = ({ navigation }: any) => {
  const { data, isLoading, isError } = getUserData();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (isError) {
    <View>
      <Text>Error fetching user data</Text>
    </View>;
  }



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.profiles, styles.profilesLayout]}>
        
        <Pressable
          onPress={() => {
            console.log("Pressed Ionicons");
            navigation.navigate("EditProfil");
          }}
        >
          <View style={styles.novBar} >
            <Ionicons name="account-edit-outline" size={25} color="#000"  />
          </View>
        </Pressable>

        <View style={styles.container}>
          <Image style={styles.imgProfil} source={{ uri: data?.image }} />
          <Text style={styles.nameUser}>
            {data?.firstName} {data?.lastName}
          </Text>
          <Text style={styles.emailUser}>{data?.email}</Text>

          <View />
          <Text style={[styles.donations, styles.freezaTypo]}>Donations</Text>
          <Text style={[styles.freeza, styles.freezaTypo]}>Freeza</Text>
          <Text style={styles.note}>Note</Text>
          <Text style={[styles.text, styles.textLayout]}>{data?.rate}</Text>
          <Text style={[styles.text1, styles.textLayout]}>
            {data?.strawberries}
          </Text>
          <Text style={[styles.text2, styles.textLayout]}>
            {data?.nbrOfDonation}
          </Text>
          <Image
            style={styles.freezaIcon}
            resizeMode="cover"
            source={require("../../assets/account/freza.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../../assets/account/star.png")}
          />
        </View>
        <FormContainer navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 3,
    paddingBottom: 2,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  profilesLayout: {
    width: "100%",
    backgroundColor: "#FFF9FC",
  },
  freezaTypo: {
    height: 18,
    width: 89,
    color: Color.colorLimegreen,
    fontSize: FontSize.size_base,
    top: 307,
    // fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    height: 27,
    position: "absolute",
    top: 270,
  },
  profile: {
    marginTop: -15,
    top: "50%",
    left: "27.62%",
    fontSize: 15,
    color: "#FFF9FC",
    textAlign: "left",
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    // position: "absolute",
  },
  novBar: {
    top: 10,
    left: "85%",
    width: 101,
    height: 30,
  },
  imgProfil: {
    top: "-25%",
    height: 130,
    width: 130,
    borderRadius: 100,
    borderColor: "#FE002A",
    marginTop: 100,
  },
  nameUser: {
    top: "80%",
    fontSize: 26,
    color: "#f8032c",
    textAlign: "center",
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  emailUser: {
    top: 210,
    fontSize: 13,
    color: "#545454",
    // fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  donations: {
    left: 79,
  },
  freeza: {
    left: 295,
  },
  note: {
    left: 200,
    width: 47,
    height: 50,
    color: Color.colorLimegreen,
    fontSize: FontSize.size_base,
    top: 307,
    // fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  text: {
    left: 209,
    width: 34,
    fontSize: FontSize.size_6xl,
    height: 37,
    color: Color.colorLimegreen,
    // fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
    top: 310,
  },
  text1: {
    top: 310,
    left: 309,
    width: 34,
    fontSize: FontSize.size_6xl,
    height: 37,
    color: Color.colorLimegreen,
    // fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
  },
  text2: {
    left: 109,
    width: 34,
    fontSize: FontSize.size_6xl,
    height: 37,
    color: Color.colorLimegreen,
    // fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
  },
  starIcon: {
    top: 257,
    left: 220,
    width: 25,
    height: 29,
    position: "absolute",
  },

  freezaIcon: {
    top: 257,
    left: 310,
    width: 45,
    height: 29,
    position: "absolute",
  },
  profiles: {
    flex: 1,
    height: 926,
    overflow: "hidden",
  },
});

export default Account;
