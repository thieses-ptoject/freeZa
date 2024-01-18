import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import {
  GiversIFollowed,
  DeleteFollower,
  GiversFollowedMe,
} from "../../React-query/user/Following";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useIsFocused } from "@react-navigation/native";
export const GeeversIfllow = ({ navigation, route }: any) => {
  const { userid } = route.params;
  const focused = useIsFocused()


  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Followers" },
    { key: "second", title: "Followed" },
  ]);

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

  const {
    data: FllowMedata,
    isLoading: FllowMeLoding,
    isError: FllowMeError,
    refetch: FllowMeRefetch,
    isSuccess: FllowMeIsSuccess,
    refetch: refetchFollower
  } = GiversFollowedMe(userid);
  const {
    data: Ifllowdata,
    isLoading: IfollowLoding,
    isError: IfollowError,
    refetch: IfollowRefetch,
    isSuccess: IfollowIsSuccess,
    refetch: refetchFollowed

  } = GiversIFollowed(userid);

  useEffect(() => {
    refetchFollowed()
    refetchFollower()
  }, [focused]);


  const delfollower = DeleteFollower();

  if (IfollowLoding || FllowMeLoding) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (IfollowError || FllowMeError) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }

  const PhotosRoutes = () => (
    <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
      {FllowMeIsSuccess && (
        <FlatList
          data={FllowMedata}
          keyExtractor={(ele) => ele.id}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view1}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("OtheruserProfile", {
                      id: item.follower,
                      userid: userid,
                    })
                  }
                >
                  <Image
                    source={{ uri: item.follower.image }}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.text1}>
                    {item.follower.firstName} {item.follower.lastName}
                  </Text>
                  <Text style={styles.text2}>{item.follower.email}</Text>
                  <Text style={styles.text2}></Text>
                  <Text style={styles.text3}>{item.follower.level}</Text>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity>
                    <Text
                      style={styles.unfollowviwe}
                      onPress={() => {
                        hundeldeletePress(item.id);
                      }}
                    >
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );

  const LikesRoutes = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
        {IfollowIsSuccess && (
          <FlatList
            data={Ifllowdata}
            keyExtractor={(ele) => ele.id}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.view1}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("OtheruserProfile", {
                        id: item.followed,
                        userid: userid,
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.followed.image }}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.text1}>
                      {item.followed.firstName} {item.followed.lastName}
                    </Text>
                    <Text style={styles.text2}>{item.followed.email}</Text>
                    <Text style={styles.text2}></Text>
                    <Text style={styles.text3}>{item.followed.level}</Text>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity>
                      <Text
                        style={styles.unfollowviwe}
                        onPress={() => {
                          hundeldeletePress(item.id);
                        }}
                      >
                        Unfollow
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    );
  };

  const renderScene = SceneMap({
    first: PhotosRoutes,
    second: LikesRoutes,
  });

  const hundeldeletePress = async (Id: any) => {
    try {
      await delfollower.mutateAsync(Id);
      IfollowRefetch();
      FllowMeRefetch();
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={{ flex: 1, marginHorizontal: 2, marginTop: "0%" }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
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
    borderRadius: 70,
    marginRight: 10,
    top: "auto",
    marginBottom: "auto",
  },
  view1: {
    flexDirection: "row",
    padding: 10,
    top: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    backgroundColor: "#FFECF6",
    borderRadius: 1000,
    borderColor: "#fff",
    borderWidth: 2,
  },

  text1: {
    fontSize: 17,
    fontWeight: "700",
  },

  text2: {
    fontSize: 12,
    opacity: 0.7,
  },
  text3: {
    fontSize: 17,
    opacity: 0.7,
    color: "#FC5A8D",
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

  unfollowviwe: {
    fontSize: 17,
    color: "#fff",
    marginLeft: 10,
    marginRight: 10,
    alignContent: "center",
    top: "10%",
    marginBottom: "4%",
  },
});
