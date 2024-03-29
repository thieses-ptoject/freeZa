import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

export const TermAndConditions = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("client/assets/incroyable-beau-ciel-nuages.jpg")}
        blurRadius={1}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView>
          <View style={styles.viwe1}>
            <Text style={styles.text}>
              {" "}
              Our Terms and Conditions were last updated on 27/12/2023. {"\n"}
            </Text>

            <Text style={styles.text}>
              Please read these terms and conditions carefully before using Our
              Service.{"\n"}Interpretation and Definitions Interpretation The
              words of which the initial letter is capitalized have meanings
              defined under the following conditions.{"\n"}
            </Text>
            <Text style={styles.text}>
              The following definitions shall have the same meaning regardless
              of whether they appear in singular or in plural. {"\n"}Definitions
              For the purposes of these Terms and Conditions: {"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"} “Application” means the software program provided by
              the Company downloaded by You on any electronic device, named
              [Free_za] {"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"} “Application Store” means the digital distribution
              service operated and developed by Apple Inc. (Apple App Store) or
              Google Inc. (Google Play Store) in which the Application has been
              downloaded. {"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"} “Affiliate” means an entity that controls, is
              controlled by or is under common control with a party, where
              "control" means ownership of 50% or more of the shares, equity
              interest or other securities entitled to vote for election of
              directors or other managing authority. {"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"} “Account” means a unique account created for You to
              access our Service or parts of our Service.{"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"}“Country” refers to [Tunisia].{"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"}“Content” refers to content such as text, images, or
              other information that can be posted, uploaded, linked to or
              otherwise made available by You, regardless of the form of that
              content.{"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"} “Device” means any device that can access the Service
              such as a computer, a cell phone or a digital tablet.{"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"} “Feedback” means feedback, innovations or suggestions
              sent by You regarding the attributes, performance or features of
              our Service. {"\n"}
            </Text>
            <Text style={styles.text}>
              {"\u2022"} “Terms and Conditions” (also referred as "Terms") mean
              these Terms and Conditions that form the entire agreement between
              You and the Company regarding the use of the Service. {"\n"}
            </Text>
            <Text style={styles.text}>
              This Terms and Conditions Agreement was generated by Terms Feed
              Mobile App Terms and Conditions Generator.{"\n"}
            </Text>

            <View>
              <Image
                source={require("client/assets/freeza.png")}
                style={styles.image2}
              />
            </View>

            <View style={styles.text}>
              <TouchableOpacity style={styles.buttonSave}>
                <Text
                  onPress={() => {
                    navigation.navigate("Account");
                  }}
                >
                 OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  text: {
    color: "black",
    fontSize: 20,
    lineHeight: 44,
    fontWeight: "600",
    textAlign: "justify",
    backgroundColor: "#0A0C79A",
    fontStyles: "italic",
    textDecorationStyles: "double",
    fontVariants: "oldstyle-nums",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  viwe1: {
    padding: 10,
    top: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    backgroundColor: "#FFFFFF50",
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 2,
    paddingBottom: 200,
  },
  buttonSave: {
    borderColor: "#fff",
    height: 54,
    borderRadius: 500,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC5A8D",
  },

  image2: {
    height: 170,
    width: 170,
    borderRadius: 85,
    justifyContent: "center",
    alignSelf: "center",
    paddingBottom: 200,
    marginBottom:100
  },
});
