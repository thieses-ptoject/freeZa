import * as React from "react";
import { useContext, useState } from "react";
import Ionicons from "react-native-vector-icons/Entypo";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  FlatList,
  useWindowDimensions,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { AuthContext } from "../../useContext/authContext";
import Backgroundprofile from "../../componets/accountCom/Otheruser";
import {
  getGivesDone,
  getReceivedDone,
  getGivesNotDone,
  getReceiveNotDone,
  DeleteAppointment,
  appointmentDone,
} from "../../React-query/appointement/appointement";
import Calander from "react-native-calendars/src/calendar";
import { ScrollView } from "react-native-gesture-handler";

export const MyAppointements = ({ navigation }: any) => {
  const { user, setUser } = useContext(AuthContext);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Donated" },
    { key: "second", title: "Received" },
    { key: "third", title: "To Donate" },
    { key: "forth", title: "To Receive" },
  ]);

  const DelateApp = DeleteAppointment();
  const AppointmentDone = appointmentDone();

  const {
    data: getDonated,
    isLoading: DonatedLoding,
    isError: DonatedError,
    refetch: DonatedRefetch,
    isSuccess: DonatedIsSuccess,
  } = getGivesDone(user.id);

  const {
    data: getReceived,
    isLoading: ReceivedLoding,
    isError: ReceivedError,
    refetch: ReceivedRefetch,
    isSuccess: ReceivedIsSuccess,
  } = getReceivedDone(user.id);

  const {
    data: getToDonate,
    isLoading: ToDonateLoding,
    isError: ToDonateError,
    refetch: ToDonateRefetch,
    isSuccess: ToDonateIsSuccess,
  } = getGivesNotDone(user.id);

  const {
    data: getToReceive,
    isLoading: ToReceiveLoding,
    isError: ToReceiveError,
    refetch: ToReceiveRefetch,
    isSuccess: ToReceiveIsSuccess,
  } = getReceiveNotDone(user.id);

  // console.log(user, "ggggggggggggggggggggggg");
  // console.log(getDonated, "/////////////////////////////////////////////////");
  // console.log(getReceived, "================================================");
  // console.log(getToDonate,"**************************++++++++++++++++++++**********************");
  // console.log(getToReceive, "--------------------------------------");

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#FC5A8D",
      }}
      style={{
        backgroundColor: "#fff",
        height: 44,
      }}
      renderLabel={({ focused, route }) => (
        <Text
          style={[{ color: focused ? "#000" : "#000", fontWeight: "bold" }]}
        >
          {route.title}
        </Text>
      )}
    />
  );

  if (ReceivedLoding || DonatedLoding || ToDonateLoding || ToReceiveLoding) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (ReceivedError || DonatedError || ToDonateError || ToReceiveError) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }

  const DoneGive = ({ navigation, route }: any) => (
    <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
      {DonatedIsSuccess && (
        <FlatList
          data={getDonated}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view1}>
                <View style={styles.view2}>
                  <View style={styles.view3}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("OtheruserProfile", {
                          id: item.reciver,
                        })
                      }
                    >
                      <Image
                        source={{ uri: item.reciver.image }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: "2%",
                      }}
                    >
                      <Text style={styles.text1}>
                        {item.reciver.firstName} {item.reciver.lastName}
                      </Text>
                      <Text></Text>
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Ionicons
                          name="old-phone"
                          size={20}
                          style={styles.iconStyle}
                        />
                        <Text style={styles.text1}>{item.reciver.phone}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.view4}>
                    <Text style={styles.text2}>
                      {"\u2022"} Name: {item.Item.name}
                    </Text>
                    <Text style={styles.text2}>
                      {"\u2022"} Location: {item.location}
                    </Text>
                    <Text style={styles.text2}>
                      {"\u2022"} Time: {item.time}
                    </Text>
                  </View>

                  <View style={styles.view5}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        navigation.navigate("RatingUser", {
                          rateData: item.reciver,
                        })
                      }
                    >
                      <Text style={styles.unfollowviwe}>Rate me</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.button1}>
                      <Text style={styles.unfollowviwe}>Done</Text>
                    </TouchableOpacity> */}
                  </View>
                </View>

                <View style={styles.view6}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ItemsDetails", {
                        itemData: item.Item,
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.Item.image[0] }}
                      style={styles.imageItem}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );

  const DoneRecieve = ({ navigation, route }: any) => (
    <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
      {ReceivedIsSuccess && (
        <FlatList
          data={getReceived}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view1}>
                <View style={styles.view2}>
                  <View style={styles.view3}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("OtheruserProfile", {
                          id: item.giver,
                        })
                      }
                    >
                      <Image
                        source={{ uri: item.giver.image }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: "2%",
                      }}
                    >
                      <Text style={styles.text1}>
                        {item.giver.firstName} {item.giver.lastName}
                      </Text>
                      <Text></Text>
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Ionicons
                          name="old-phone"
                          size={20}
                          style={styles.iconStyle}
                        />
                        <Text style={styles.text1}>{item.giver.phone}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.view4}>
                    <Text style={styles.text2}>
                      {"\u2022"} Name: {item.Item.name}
                    </Text>
                    <Text style={styles.text2}>
                      {"\u2022"} Location: {item.location}
                    </Text>
                    <Text style={styles.text2}>
                      {"\u2022"} Time: {item.time}
                    </Text>
                  </View>

                  <View style={styles.view5}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        navigation.navigate("RatingUser", {
                          rateData: item.giver,
                        })
                      }
                    >
                      <Text style={styles.unfollowviwe}>Rate me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button1}
                      onPress={() => {
                        Alert.alert(
                          "Are you encountering an issue?",
                          "Kindly select one of the choices",
                          [
                            {
                              text: "Cancel",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel",
                            },
                            {
                              text: "Ask Giver",
                              onPress: () => {
                                navigation.navigate("Chatscreen", {
                                  currentUser: user.id,
                                  user: item.giver,
                                });
                              },
                            },
                            {
                              text: "Report Giver",
                              onPress: () => {
                                navigation.navigate("HelpCenter", {
                                  user: user.id,
                                });
                              },
                            },
                          ]
                        );
                      }}
                    >
                      <Text style={styles.unfollowviwe}>Report</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.view6}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ItemsDetails", {
                        itemData: item.Item,
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.Item.image[0] }}
                      style={styles.imageItem}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
  const NotyetGive = ({ navigation, route }: any) => (
    <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
      {ToDonateIsSuccess && (
        <FlatList
          data={getToDonate}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view1}>
                <View style={styles.view2}>
                  <View style={styles.view3}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("OtheruserProfile", {
                          id: item.reciver,
                        })
                      }
                    >
                      <Image
                        source={{ uri: item.reciver.image }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: "2%",
                      }}
                    >
                      <Text style={styles.text1}>
                        {item.reciver.firstName} {item.reciver.lastName}
                      </Text>
                      <Text></Text>
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Ionicons
                          name="old-phone"
                          size={20}
                          style={styles.iconStyle}
                        />
                        <Text style={styles.text1}>{item.reciver.phone}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.view4}>
                    <Text style={styles.text2}>
                      {"\u2022"} Name: {item.Item.name}
                    </Text>
                    <Text style={styles.text2}>
                      {"\u2022"} Location: {item.location}
                    </Text>
                    <Text style={styles.text2}>
                      {"\u2022"} Time: {item.time}
                    </Text>
                  </View>

                  <View style={styles.view5}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        Alert.alert(
                          "Cancel Donation  ",
                          "You have to inform the receiver that you will cancel the procedure",
                          [
                            {
                              text: "Cancel",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel",
                            },
                            {
                              text: "OK",
                              onPress: () => {
                                navigation.navigate("Chatscreen", {
                                  currentUser: user.id,
                                  user: item.reciver,
                                });
                                DelateApp.mutateAsync({
                                  id: item.id,
                                  ItemId: item.ItemId,
                                });
                                ToDonateRefetch();
                              },
                            },
                          ]
                        );
                      }}
                    >
                      <Text style={styles.unfollowviwe}>cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}
                    onPress={() => {
                      AppointmentDone.mutate({
                        ItemId: item.ItemId,
                         appointmentId: item.id ,
                          reciverId: item.reciverId,
                          giverId: item.giverId,
                      });
                      ToDonateRefetch();
                    }}>
                      <Text style={styles.unfollowviwe}>Done</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.view6}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ItemsDetails", {
                        itemData: item.Item,
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.Item.image[0] }}
                      style={styles.imageItem}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
  const NotyetRecieve = ({ navigation, route }: any) => (
    <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
      {ToReceiveIsSuccess && (
        <FlatList
          data={getToReceive}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view1}>
                <View style={styles.view2}>
                  <View style={styles.view3}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("OtheruserProfile", {
                          id: item.giver,
                        })
                      }
                    >
                      <Image
                        source={{ uri: item.giver.image }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: "2%",
                      }}
                    >
                      <Text style={styles.text1}>
                        {item.giver.firstName} {item.giver.lastName}
                      </Text>
                      <Text></Text>
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Ionicons
                          name="old-phone"
                          size={20}
                          style={styles.iconStyle}
                        />
                        <Text style={styles.text1}>{item.giver.phone}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.view4}>
                    <Text style={styles.text2}>
                      {"\u2022"} Name: {item.Item.name}
                    </Text>
                    <Text style={styles.text2}>
                      {"\u2022"} Location: {item.location}
                    </Text>
                    <Text style={styles.text2}>
                      {"\u2022"} Time: {item.time}
                    </Text>
                  </View>

                  <View style={styles.view5}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        Alert.alert(
                          "Stop operation",
                          "You have to inform the Giver that you will cancel the procedure",
                          [
                            {
                              text: "Cancel",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel",
                            },
                            {
                              text: "OK",
                              onPress: () => {
                                navigation.navigate("Chatscreen", {
                                  currentUser: user.id,
                                  user: item.giver,
                                });
                              },
                            },
                          ]
                        );
                      }}
                    >
                      <Text style={styles.unfollowviwe}>cancel</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.button1}>
                      <Text style={styles.unfollowviwe}>Done</Text>
                    </TouchableOpacity> */}
                  </View>
                </View>

                <View style={styles.view6}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ItemsDetails", {
                        itemData: item.Item,
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.Item.image[0] }}
                      style={styles.imageItem}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return <DoneGive navigation={navigation} route={route} />;
      case "second":
        return <DoneRecieve navigation={navigation} route={route} />;
      case "third":
        return <NotyetGive navigation={navigation} route={route} />;
      case "forth":
        return <NotyetRecieve navigation={navigation} route={route} />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, height:"100%"}}>
    <SafeAreaView style={styles.safearea}>
      <StatusBar backgroundColor="#FC5A8D"  />
      <ScrollView>
      <Calander 
                    // Specify style for calendar container element. Default = {}
                    style={{
                        borderWidth: 5,
                        borderColor: '#FFF8FB',
                       
                    }}
                    /> 
                    </ScrollView>
     
     
    </SafeAreaView>
    <View style={{ flex: 3,marginHorizontal: 5 ,height:"100%"}}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#FFF8FB",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: "2%",
    // top: "auto",
    // marginBottom: "auto",
    borderColor: "red",
    borderWidth: 1,
  },
  imageItem: {
    height: 240,
    width: "100%",
    borderRadius: 10,
    marginLeft: "auto",
  },
  view1: {
    flexDirection: "row",
    padding: 7,
    top: "5%",
    marginLeft: "2%",
    marginRight: "1%",
    marginBottom: "2%",
    backgroundColor: "#FFECF6",
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
  view2: {
    flexDirection: "column",
    padding: 5,
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    width: "55%",
    marginRight: "1%",
  },
  view3: {
    flexDirection: "row",
  },
  view4: {
    flexDirection: "column",
    padding: 10,
    top: "5%",
  },
  view5: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    // borderColor: "red",
    // borderWidth: 1,
    justifyContent: "space-around",
    top: "3%",
  },
  view6: {
    padding: 1,
    width: "45%",
    // borderColor: "red",
    // borderWidth: 1,
    justifyContent: "space-around",
  },
  text1: {
    fontSize: 13,
    fontWeight: "700",
    marginRight: "5%",
    top: "3%",
  },

  text2: {
    fontSize: 15,
    fontWeight: "500",
    opacity: 0.9,
  },
  text3: {
    fontSize: 15,
    opacity: 0.7,
    color: "#FC5A8D",
  },

  button: {
    marginBottom: "10%",
    width: "50%",
    borderRadius: 10,
    height: "100%",
    borderColor: "#fff",
    borderWidth: 2,
    // justifyContent: "center",
    backgroundColor: "#FC5A8D",
  },
  button1: {
    marginBottom: "10%",
    width: "50%",
    borderRadius: 10,
    height: "100%",
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: "#89AD72",
  },
  unfollowviwe: {
    justifyContent: "center",
    // marginBottom: "0%",
    top: "26%",
    fontSize: 17,
    color: "#fff",
    // marginLeft: "10%",
    // // marginRight: "1%",
    // alignContent: "center",
    textAlign: "center",
    textTransform: "uppercase",
  },
  Itemdata: {
    marginBottom: "1%",
    alignItems: "center",
    top: "1%",
    borderRadius: 30,
    borderColor: "#fff",
    borderWidth: 2,
    justifyContent: "center",
  },
  iconStyle: {
    color: "#FC5A8D",
    marginRight: 10,
  },
});
