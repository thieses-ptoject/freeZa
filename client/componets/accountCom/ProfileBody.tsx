import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  Keyboard,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../useContext/authContext";
import { MenuProfile } from "../../componets/accountCom/MenuProfil";
import Ionicons from "react-native-vector-icons/Ionicons";

export const ProfileButtons = ({ navigation }: any) => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("Pressed Ionicons");
              navigation.navigate("EditProfil");
            }}
            style={{
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 35,
                borderRadius: 5,
                borderColor: "#FC5A8D",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                }}
              >
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};
