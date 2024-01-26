import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  Keyboard,
  Alert,
  Share,
} from "react-native";
import { ProfileButtons } from "../../componets/accountCom/ProfileBody";
import BottomTabView from "../../componets/accountCom/BottomTabView";
import { Feather } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../useContext/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ip } from "../../config.json";
import { useStripe } from "@stripe/stripe-react-native";
import { useIsFocused } from "@react-navigation/native";


const Account = ({ navigation,route }: any) => {
    const { user, setUser } = useContext(AuthContext);
    const { setIsAuthenticated } = useContext(AuthContext);
    const focused = useIsFocused()
    
    const [openModal, setOpenModal] = useState(false);
    const transparnet = "rgba(0,0,0,0.2)";
    const userData = user.id;
  
    const clearAsyncStorage = async () => {
      try {
        await AsyncStorage.clear();
        console.log("AsyncStorage cleared successfully!");
      } catch (error) {
        console.error("Error clearing AsyncStorage: ", error);
      }
    };


    useEffect(() => {
     
    }, [focused]);

    const shareText = async (text: string) => {
      try {
        await Share.share({
          message: text,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    };
  
    const handleLogout = () => {
      setIsAuthenticated(false);
      clearAsyncStorage();
    };
    // Payment process :
    const Updateacc = async (userData: string) => {
      try {
        const response = await axios.put(
          `http://${ip}:3001/user/premium/${userData}`
        );
        console.log("account updated successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);
  
    const fetchPaymentSheetParams = async () => {
      const response = await fetch(`http://${ip}:3001/payments/intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   userData: userData,
        // })
      });
      const { paymentIntent, ephemeralKey, customer } = await response.json();
    
  
      return {
        paymentIntent,
        ephemeralKey,
        customer,
      };
    };
  
    const initializePaymentSheet = async () => {
      const { paymentIntent, ephemeralKey, customer } =
        await fetchPaymentSheetParams();
      // console.log('current:', userData);
  
      const { error } = await initPaymentSheet({
        merchantDisplayName: "Example, Inc.",
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
        //methods that complete payment after a delay, like SEPA Debit and Sofort.
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: customer.name,
        },
      });
  
      if (!error) {
        setLoading(true);
      }
    };
  
    const openPaymentSheet = async () => {
      const { error } = await presentPaymentSheet();
  
      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else {
        try {
          await Updateacc(userData);
          Alert.alert("Success", "Your order is confirmed!");
        } catch (mutationError) {
          console.error("Mutation error:", mutationError);
        }
      }
    };
  
    React.useEffect(() => {
      initializePaymentSheet();
    }, []);
  
    const handlePressOutside = () => {
      Keyboard.dismiss();
    };
  
    const HundelPressModel = () => {
      return (
        <Modal visible={openModal} animationType="slide" transparent={true}>
          <TouchableWithoutFeedback onPress={handlePressOutside}>
            <View style={styles.modalView1}>
              <View style={styles.modalView2}>
                <TouchableOpacity
                  onPress={() => {
                    setOpenModal(false);
                  }}
                >
                  <View
                    style={{
                      marginLeft: "90%",
                      marginBottom: "5%",
                    }}
                  >
                    <Ionicons name="close-outline" size={20} />
                  </View>
                </TouchableOpacity>
  
                <View style={styles.modalView3}>
                  <View style={styles.modalView4}>
                    <TouchableOpacity
                      onPress={() =>{ navigation.navigate("Wishlist"),
                      setOpenModal(false);}}
                    >
                      <View style={styles.modalView5}>
                        <View style={styles.modalView6}>
                          <Ionicons
                            name="heart-outline"
                            size={22}
                            color="#FC5A8D"
                          />
                          <Text style={styles.modalText1}>
                            My favourite Items{" "}
                          </Text>
                        </View>
                        <View style={styles.ViewimgModal}>
                          <Image
                            resizeMode="cover"
                            source={require("../../assets/account/fill-1.png")}
                            style={styles.imgModal}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.modalView4}>
                    <TouchableOpacity
                      onPress={() => {navigation.navigate("MyAppointements")
                      setOpenModal(false);}
                      
              }
                    >
                      <View style={styles.modalView5}>
                        <View style={styles.modalView6}>
                          <Ionicons
                            name="briefcase-eye-outline"
                            size={20}
                            color="#FC5A8D"
                          />
                          <Text style={styles.modalText1}> My Appointements</Text>
                        </View>
                        <View style={styles.ViewimgModal} >
                          <Image
                            resizeMode="cover"
                            source={require("../../assets/account/fill-1.png")}
                            style={styles.imgModal}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.modalView4}>
                    <TouchableOpacity
                      onPress={() =>{
                        navigation.navigate("GeeversIfllow", { userid: userData })
                        setOpenModal(false);
                      }
                    }
                    >
                      <View style={styles.modalView5}>
                        <View style={styles.modalView6}>
                          <Ionicons
                            name="account-heart-outline"
                            size={25}
                            color="#FC5A8D"
                          />
                          <Text style={styles.modalText1}>Givers I follow</Text>
                        </View>
                        <View style={styles.ViewimgModal}>
                          <Image
                            resizeMode="cover"
                            source={require("../../assets/account/fill-1.png")}
                            style={styles.imgModal}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.modalView4}>
                    <TouchableOpacity
                      onPress={() =>{ navigation.navigate("TermAndConditions")
                      setOpenModal(false);}
                  }
                    >
                      <View style={styles.modalView5}>
                        <View style={styles.modalView6}>
                          <Ionicons
                            name="shield-key-outline"
                            size={20}
                            color="#FC5A8D"
                          />
                          <Text style={styles.modalText1}>
                            Terms & Conditions
                          </Text>
                        </View>
                        <View style={styles.ViewimgModal}>
                          <Image
                            resizeMode="cover"
                            source={require("../../assets/account/fill-1.png")}
                            style={styles.imgModal}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.modalView4}>
                    <TouchableOpacity
                      onPress={() =>{
                        navigation.navigate("HelpCenter", { user: userData })
                        setOpenModal(false)}
                      }
                    >
                      <View style={styles.modalView5}>
                        <View style={styles.modalView6}>
                          <Ionicons
                            name="help-circle-outline"
                            size={22}
                            color="#FC5A8D"
                          />
                          <Text style={styles.modalText1}>Help Center</Text>
                        </View>
                        <View style={styles.ViewimgModal}>
                          <Image
                            resizeMode="cover"
                            source={require("../../assets/account/fill-1.png")}
                            style={styles.imgModal}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.modalView4}>
                    <TouchableOpacity
                      onPress={() => {
                        shareText("We are delighted to invite you to our application, FREEZA. Feel free to visit the site whenever you want and explore the exciting features we have to offer.");
                      }}
                    >
                      <View style={styles.modalView5}>
                        <View style={styles.modalView6}>
                          <Ionicons
                            name="account-multiple-plus-outline"
                            size={22}
                            color="#FC5A8D"
                          />
                          <Text style={styles.modalText1}>Invite Friends</Text>
                        </View>
                        <View style={styles.ViewimgModal} >
                          <Image
                            resizeMode="cover"
                            source={require("../../assets/account/fill-1.png")}
                            style={styles.imgModal}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.modalView4}>
                    <TouchableOpacity onPress={openPaymentSheet }
                    >
                      <View style={styles.modalView5}>
                        <View style={styles.modalView6}>
                        <MaterialIcons
                            name="attach-money"
                            size={22}
                            color="#FC5A8D"
                          />
                          <Text style={styles.modalText1}>Buy More Freeza</Text>
                        </View>
                        <View style={styles.ViewimgModal}>
                          <Image
                            resizeMode="cover"
                            source={require("../../assets/account/fill-1.png")}
                            style={styles.imgModal}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.modalView4}>
                    <TouchableOpacity 
                     onPress={() => {
                      Alert.alert(
                        "LogOut",
                        "Are you sure you want to logOut ?",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: () => {
                              handleLogout()
                            },
                          },
                        ]
                      );
                    }}>
                      <View style={styles.modalView5}>
                        <View style={styles.modalView6}>
                          <Ionicons
                            name="account-arrow-left-outline"
                            size={22}
                            color="#FC5A8D"
                          />
                          <Text style={styles.modalText1}>Logout</Text>
                        </View>
                        <View style={styles.ViewimgModal}>
                          <Image
                            resizeMode="cover"
                            source={require("../../assets/account/fill-1.png")}
                            style={styles.imgModal}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
    };
  
    const ProfileBody = () => {
      return (
        <View>
          {user ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {user.firstName} {user.lastName}
                </Text>
            
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
               
                <Feather
                  name="menu"
                  style={{
                    fontSize: 25,
                  }}
                  onPress={() => {
                    setOpenModal(true);
                    console.log("hihihih");
                  }}
                />
              </View>
            </View>
          ) : null}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: user.image }}
                style={{
                  resizeMode: "cover",
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  borderColor: "#FC5A8D",
                  borderWidth: 2,
                }}
              />
            
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate("RatingUser", { rateData: user })}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                style={{
                  top: "-15%",
                  left: "50%",
                  width: 25,
                  height: 20,
                  position: "absolute",
                }}
                resizeMode="cover"
                source={require("../../assets/account/star.png")}
              />
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {user.rate}
              </Text>
              <Text>Rate</Text>
            </View>
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {user.nbrOfDonation}
              </Text>
              <Text>Donation</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{
                  top: "-24%",
                  left: "20%",
                  width: 45,
                  height: 29,
                  position: "absolute",
                }}
                resizeMode="cover"
                source={require("../../assets/account/freza.png")}
              />
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {user.strawberries}
              </Text>
              <Text>Note</Text>
            </View>
          </View>
        </View>
      );
    };
  
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <View style={{ width: "100%", padding: 10 }}>
          {ProfileBody()}
          <ProfileButtons navigation={navigation} />
        </View>
        <BottomTabView />
        {HundelPressModel()}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      top: "50%",
      left: 150,
    },
    modalView1: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    modalView2: {
      borderRadius: 10,
      width: "100%",
      padding: 10,
      height: "73%",
      backgroundColor: "#FFF8FB",
      borderColor: "#FC5A8D",
      borderWidth: 1,
      alignItems: "center",
    },
    modalView3: {
      width: "90%",
      borderRadius: 10,
      height: "100%",
    },
    modalView4: {
      height: "8%",
      justifyContent: "center",
    },
    modalView5: {
      flexDirection: "row",
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: "#FFF8FB",
      justifyContent: "space-around",
      borderColor: "#FC5A8D",
      height: "90%",
      shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  
  elevation: 6,
    },
    modalView6: {
      flexDirection: "row",
      borderRadius: 10,
      height: "100%",
      width: "70%",
      top: "20%",
    },
    modalText1: {
      color: "#000",
      fontWeight: "500",
      fontSize: 17,
      marginLeft: "5%",
    },
    imgModal: {
      height: "30%",
    },
    ViewimgModal: {
      top: "4%",
    },
  
  });

export default Account;
