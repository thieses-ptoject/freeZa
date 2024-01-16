import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  Alert,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Text } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { UserItems, UserPosts } from "../../React-query/user/otherUserProfil";
import { followUnfollower, getFollows } from "../../React-query/user/Following";
import Backgroundprofile from "../../componets/accountCom/Otheruser";

export const OtheruserProfile = ({ navigation ,route}: any) => {
  const { id} = route.params;


  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Donations" },
    { key: "second", title: "Requests" },
  ]);

  const FollowUnfollower = followUnfollower();

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
    data: userData,
    isLoading: userDataLoading,
    isError: userDataError,
    refetch,
    isSuccess,
  } = UserItems("1");
  const {
    data: userPostsData,
    isLoading: userPostsLoading,
    isError: userPostsError,
  } = UserPosts("1");

  const {
    data: FollowsData,
    isLoading: FollowsLoading,
    isError: FollowsError,
    refetch:  FollowsDataRefetch
  } = getFollows("1",id.id);


  if (userDataLoading || userPostsLoading || FollowsLoading  ) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (userDataError || userPostsError || FollowsError ) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }


  const hundeldeletePress = async () => {
    try {
      await FollowUnfollower.mutateAsync({
        followerId: "1",
        followedId: id.id,
      });
      FollowsDataRefetch();
    } catch (errors) {
      console.log(errors);
    }
  };

  const PhotosRoutes = ({ navigation, route }: any) => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userData}
        keyExtractor={(ele) => ele.id}
        numColumns={3}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              aspectRatio: 1,
              margin: 3,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ItemsDetails", { itemData: item })
              }
            >
              <Image
                key={index}
                source={{ uri: item.image[0] }}
                style={{ width: "100%", height: "100%", borderRadius: 12 }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );

  const LikesRoutes = () => (
    <View style={{ flex: 1, backgroundColor: "#DCD6D9" }}>
      <FlatList
        data={userPostsData}
        numColumns={3}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              aspectRatio: 1,
              margin: 3,
            }}
          >
            <Image
              key={index}
              source={{ uri: item?.image }}
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
            />
          </View>
        )}
      />
    </View>

    
  );

  const renderScene = ({ route }: any) => {

    switch (route.key) {
      case "first":
        return <PhotosRoutes navigation={navigation} route={route} />;
      case "second":
        return <LikesRoutes navigation={navigation} route={route} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar backgroundColor="#FC5A8D" />

      <Backgroundprofile />

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={{ uri: id.image }}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: "#FC5A8D",
            borderWidth: 2,
            marginTop: -90,
          }}
        />
        <Text
          style={{
            color: "#000",
            marginVertical: 8,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {" "}
          {id.firstName} {id.lastName}{" "}
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-on" size={24} color="black" />

          <Text style={{ color: "#000", marginLeft: 4 }}> {id.address} </Text>
        </View>
        <View style={{ paddingVertical: 8, flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Text style={{ color: "#000" }}> {id.nbrOfDonation} </Text>
            <Text style={{ color: "#000" }}> Donation</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ color: "#000" }}> {id.nbrOfDonation}</Text>
            <Text style={{ color: "#000" }}> Takes</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ color: "#000" }}> {id.nbrOfDonation}/5 </Text>
            <Text style={{ color: "#000" }}> Rate</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FC5A8D",
              borderRadius: 10,
              marginHorizontal: 30,
            }}
          >
            <Text
              style={{ color: "#fff" }}
              onPress={() => {
                hundeldeletePress()
              }}
            >
              {" "}
              {FollowsData?.length ===1 ? "Unfollow" : "Follow"}{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#8FD166",
              borderRadius: 10,
              marginHorizontal: 30,
            }}
          >
            <Text style={{ color: "#fff" }}> Send Massege </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, marginHorizontal: 22, marginTop: "-1%" }}>
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
  StatusBarStyle: {
    flex: 1,
  },

  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
});
