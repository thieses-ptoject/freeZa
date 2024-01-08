import React from "react";
import { getUserData } from "../../React-query/user/profileUser";

import { View, Text, Image, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles/UserProfil";
import FormContainer from "../../componets/accountCom/FormContainer";

const Account = () => {
  // const [isLoading,setisLoading]=useState(true)
  // const [isError,setisError]=useState(true)

  const { data, isLoading, isError } = getUserData();

  if (isLoading) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }
  if (isError) {
    <View>
      <Text>Error fetching user data</Text>
    </View>;
  }

  console.log(data);

  return (
    <View style={[styles.profiles, styles.profilesLayout]}>
      <View style={styles.novBar}>
        <Image
          style={styles.fill2Icon}
          resizeMode="cover"
          source={require("../../assets/account/Fill2.png")}
        />
      </View>

      <View style={styles.container}>
        <Image
          style={styles.imgProfil}
          source={require("../../assets/account/userimg.png")}
        />
      </View>

      <Text style={styles.nameUser}>first</Text>
      <Text style={styles.emailUser}>hernandex.redial@gmail.ac.in</Text>

      <View />
      <Text style={[styles.donations, styles.freezaTypo]}>donations</Text>
      <Text style={[styles.freeza, styles.freezaTypo]}>freeza</Text>
      <Text style={styles.note}>note</Text>
      <Text style={[styles.text, styles.textLayout]}>0</Text>
      <Text style={[styles.text1, styles.textLayout]}>0</Text>
      <Text style={[styles.text2, styles.textLayout]}>0</Text>
      <Image
        style={styles.freezaIcon}
        resizeMode="cover"
        source={require("../../assets/account/freza.png")}
      />
      <Image
        style={[styles.starIcon, styles.textLayout]}
        resizeMode="cover"
        source={require("../../assets/account/star.png")}
      />

      <FormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  imgProfil: {
    top: "-25%",
    height: 130,
    width: 130,
    borderRadius: 100,
    borderColor: "#FE002A",
    marginTop: 100,
  },
  fill2Icon: {
    left: "5%",
    top: "17%",
    // height: "30.89%",
    // width: "2%",
  },

  profilesLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  freezaTypo: {
    height: 18,
    width: 89,
    color: Color.colorLimegreen,
    fontSize: FontSize.size_base,
    top: 307,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    height: 27,
    position: "absolute",
    top: 270,
  },
  // fill1Icon: {
  //   height: "66.67%",
  //   width: "25.95%",
  //   top: "16.67%",
  //   right: "74.05%",
  //   bottom: "16.67%",
  //   maxWidth: "100%",
  //   maxHeight: "100%",
  //   left: "0%",
  //   position: "absolute",
  //   overflow: "hidden",
  // },
  profile: {
    marginTop: -15,
    top: "50%",
    left: "27.62%",
    fontSize: 15,
    color: "#202244",
    textAlign: "left",
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  novBar: {
    top: 10,
    left: 25,
    width: 101,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },

  nameUser: {
    top: 180,
    left: 190,
    fontSize: 26,
    color: "#f8032c",
    textAlign: "center",
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  emailUser: {
    top: 210,
    left: 123,
    fontSize: 13,
    color: "#545454",
    fontFamily: FontFamily.mulishBold,
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
    fontFamily: FontFamily.mulishBold,
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
    fontFamily: FontFamily.mulishBold,
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
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
  },
  text2: {
    left: 109,
    width: 34,
    fontSize: FontSize.size_6xl,
    height: 37,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
  },
  starIcon: {
    top: "100%",
    left: 222,
    width: 25,
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
