import React, { useRef, useState } from "react";
import { RefObject } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
  FlatList,
} from "react-native";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";
import moment from "moment";
import { GetFav } from "../../React-query/ProductDetails/Details";
import { getUserData } from "./../../localStorage/getuser";
import {
  getOnePostComm,
  getOnePostLikes,
} from "./../../React-query/user/Postes";
import { TabBar, TabView } from "react-native-tab-view";

const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 55;
const MAX_HEIGHT = 250;

export const InviteFreind = ({ navigation, route }: any) => {
  const { itemData } = route.params;
  const [userConnected, setUserConncted] = useState<string>("");
  const { data, refetch, isSuccess } = GetFav(userConnected, itemData.id);

  getUserData().then((result: any) => {
    setUserConncted(result.id);
    refetch();
  });

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Comments" },
    { key: "second", title: "Likes" },
  ]);

  const {
    data: ComData,
    isLoading: comLoading,
    isError: comError,
    refetch: refetchComrData,
    isSuccess: ComrDataisSuccess,
  } = getOnePostComm(itemData.id);
  const {
    data: likeData,
    isLoading: likeLoading,
    isError: likeError,
    refetch: refetchlikeData,
    isSuccess: likeDataisSuccess,
  } = getOnePostLikes(itemData.id);

  const navTitleView: RefObject<any> = useRef(null);

  if (comLoading || likeLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (comError || likeError) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#FC5A8D",
      }}
      style={{
        backgroundColor: "#FFECF6",
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
  const CommentsRoutes = ({ navigation, route }: any) => (
    <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
      {ComrDataisSuccess && (
        <FlatList
          data={ComData}
          keyExtractor={(ele) => ele.id}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view1}>
                <TouchableOpacity
                  onPress={() => {
                    if (item.user?.id === userConnected) {
                      navigation.navigate("Account", {
                        id: item.user,
                        userid: userConnected,
                      });
                    }
                    else{
                    navigation.navigate("OtheruserProfile", {
                      id: item.user,
                      userid: userConnected,
                    });
                  }
                  }}
                >
                  <Image
                    source={{ uri: item.user.image }}
                    style={styles.imagexx}
                  />
                </TouchableOpacity>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      // borderColor: "red",
                      // borderWidth: 2,
                      width:"80%"
                    }}
                  >
                    <Text style={styles.text1}>
                      {item.user.firstName} {item.user.lastName}
                    </Text>
                    <View
                      style={{
                        marginLeft: "auto",
                      }}
                    >
                      {/* <Text style={styles.text1}>
                        {moment(item.user.createdAt).format("d -MMM- y")}
                      </Text> */}
                    </View>
                  </View>
                  <Text style={styles.text2}>{item.body}</Text>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );

  const LikesRoutes = ({ navigation, route }: any) => {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
        {likeDataisSuccess && (
          <FlatList
            data={likeData}
            keyExtractor={(ele) => ele.id}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.view1}>
                  <TouchableOpacity
                    onPress={() => {
                      if (item.user?.id === userConnected) {
                        navigation.navigate("Account", {
                          id: item.user,
                          userid: userConnected,
                        });
                      }
                      else{
                      navigation.navigate("OtheruserProfile", {
                        id: item.user,
                        userid: userConnected,
                      });
                    }
                    }}
                  >
                    <Image
                      source={{ uri: item.user.image }}
                      style={styles.imagexx}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.text1}>
                      {item.user.firstName} {item.user.lastName}
                    </Text>
                    <Text style={styles.text3}>{item.user.level}</Text>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    );
  };

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return <CommentsRoutes navigation={navigation} route={route} />;
      case "second":
        return <LikesRoutes navigation={navigation} route={route} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        overlayColor="rgba(0, 0, 0, 0.6)"
        renderHeader={() => (
          <View>
            <Image source={{ uri: itemData.image }} style={styles.image} />
          </View>
        )}
        foregroundExtrapolate="clamp"
      >
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current?.fadeInUp(200)}
          onDisplay={() => navTitleView.current?.fadeOut(100)}
          onBeginHidden={() => {}}
          onBeginDisplayed={() => {}}
          onTouchTop={() => {}}
          onTouchBottom={() => {}}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>
              {" "}
              {moment(itemData?.createdAt).format("d -MMM- y")}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome name={"comment-o"} size={30} color={"#FC5A8D"} />
                <Text style={styles.title1}>{ComData.length}</Text>
                <Text style={styles.title}> </Text>
                <Text style={styles.title}> </Text>
                <Ionicons name={"heart"} size={30} color={"#FC5A8D"} />
                <Text style={styles.title1}> {likeData.length}</Text>
              </View>
            </View>
          </View>
        </TriggeringView>

        <View style={{ flexDirection: "row", height: "80%" }}>
          <Text style={styles.sectionContent}>{itemData?.body}</Text>
        </View>
      </ImageHeaderScrollView>

      <View style={{ flex: 1, marginHorizontal: 2, marginTop: "-30%" }}>
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
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    color: "#2C5712",
  },
  title1: {
    fontSize: 15,
    color: "#2C5712",
  },
  name: {
    fontWeight: "bold",
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify",
    padding: 20,
  },
  view1: {
    flexDirection: "row",
    padding: 10,
    top: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    backgroundColor: "#FFECF6",
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 2,
  },
  starImgstyle: {
    height: 40,
    width: 40,
    resizeMode: "cover",
  },
  starImgstyle1: {
    height: 15,
    width: 15,
    resizeMode: "cover",
  },
  starImgstyle2: {
    height: 35,
    width: 35,
    resizeMode: "cover",
  },

  text1: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },

  text2: {
    fontSize: 13,
    opacity: 0.7,
    marginRight: "20%",
  },
  text3: {
    fontSize: 17,
    opacity: 0.7,
    color: "#FC5A8D",
  },
  imagexx: {
    height: 60,
    width: 60,
    borderRadius: 70,
    marginRight: 10,
    top: "auto",
    marginBottom: "auto",
  },
  button: {
    marginBottom: "8%",
    alignItems: "center",
    top: "3%",
    marginLeft: "auto",
    borderRadius: 30,
    borderColor: "#fff",
    borderWidth: 2,
    justifyContent: "center",
    backgroundColor: "#89AD72",
  },
  tex: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: 10,
    top: "auto",
    marginBottom: "auto",
    textAlign: "justify",
  },
});
