import { useIsFocused } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { getallraters, Rating } from "../../React-query/user/Rating";
import { getUserData } from "./../../localStorage/getuser";
import { Ionicons } from "@expo/vector-icons";

export const MenuProfile = ({ navigation, route }: any) => {
  const { rateData } = route.params;
  const transparnet = "rgba(0,0,0,0.5)";
  const [userConnected, setUserConncted] = useState<string>("");
  
  const [comment, setComment] = useState("");
  const focused = useIsFocused();
  const [openModal, setOpenModal] = useState(false);
  

  getUserData().then((result: any) => {
    setUserConncted(result.id);
  });



  const {
    data: ratersData,
    isLoading: ratersLoding,
    isError: ratersError,
    isSuccess: ratersIsSuccess,
    refetch: refetchRaters,
  } = getallraters(rateData.id);

  
  useEffect(() => {;
    refetchRaters();
  }, [focused]);

  

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const HundelPressModel = () => {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: transparnet,
            }}
          >
            <View
              style={{
                borderRadius: 10,
                width: "100%",
                padding: 10,
                height: "80%",
                backgroundColor: "white",
                borderColor: "#FC5A8D",
                borderWidth: 1,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setOpenModal(false);
                }}
              >
                <View
                  style={{
                    marginLeft: "90%",
                    marginBottom: "10%",
                  }}
                >
                  <Ionicons name="close-outline" size={30} />
                </View>
              </TouchableOpacity>

              <View
                style={{
                  marginBottom: "10%",
                }}
              >
                <Text
                  style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}
                >
                  {" "}
                  How was your experience ?
                </Text>
              </View>
              <View
                style={{
                  marginBottom: "10%",
                }}
              >
              </View>

              <TextInput
                placeholder="Write your review"
                multiline
                numberOfLines={1}
                value={comment}
                onChangeText={(value) => setComment(value)}
                style={{
                  borderColor: "#FC5A8D",
                  padding: "3%",
                  height: "33%",
                  width: "80%",
                  borderWidth: 1,
                  borderRadius: 4,
                  marginBottom: "10%",
                  backgroundColor: "#F7FCF4",
                  fontSize: 15,
                }}
              />
              
                <View
                  style={{
                    borderColor: "#fff",
                    height: "25%",
                    width: 250,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FC5A8D",
                    bottom: "2%",
                  }}
                >
                  <Text> Save</Text>
                </View>
             
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  
}

 

const styles = StyleSheet.create({
  container: {
    top: "50%",
    left: 150,
  },
 
})
