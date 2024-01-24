import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { followUnfollower, getFollows } from "../../React-query/user/Following";
import axios from "axios";
import config from "../../config.json";
const UserDetails = (props: any) => {
  const [userStorage, setUserStorage] = useState({});
  const [FollowsData, setFollowsData] = useState([]);
  const FollowUnfollower = followUnfollower();
  const navigation = useNavigation();

  console.log(FollowsData, "kkkkkkkkkkkkkkkkkkkkkkk");
  const fetchFollowData = async () => {
    try {
      const response = await axios.get(
        `http://${config.ip}:3001/followers/${userStorage.id}/${props.user.id}`
      );
      setFollowsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const hundeldeletePress = async () => {
    try {
      await FollowUnfollower.mutateAsync({
        followerId: userStorage.id,
        followedId: props.user.id,
      });
      fetchFollowData();
    } catch (errors) {
      console.log(errors);
    }
  };

  const getUserData = async () => {
    try {
      const savedData = await AsyncStorage.getItem("user");

      if (savedData) {
        var data = JSON.parse(savedData);
        setUserStorage(data);
        return data;
      } else {
        console.log("No user data found");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
      return null;
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.bigContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate("OtheruserProfile", {
            id: props.user,
            userid: userStorage.id,
          })
        }
      >
        <Image
          style={styles.image}
          source={{
            uri: props.user.image,
          }}
        />
      </Pressable>
      <View>
        <Text style={styles.name}>
          {props.user.firstName}
          {props.user.lastName}
        </Text>
        <View>
          <Text style={styles.level}>{props.user.level}</Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => {
              hundeldeletePress();
            }}
          >
            {" "}
            {FollowsData?.length === 1 ? "Unfollow" : "Follow"}{" "}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  level: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "grey",
  },
  image: {
    marginTop: "10%",
    width: 100,
    height: 100,
    borderRadius: 9999,
    marginLeft: "auto",
    marginRight: "auto",
  },
  bigContainer: {
    width: 170,
    height: 240,
    borderWidth: 0.2,
    marginRight: 5,
    borderRadius: 7,
    elevation: 0.00000000001,
    borderColor: "grey",
    backgroundColor: "#f7faf8",
  },
  name: {
    marginTop: "7%",
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 17,
  },
  button: {
    marginTop: "4%",
    height: "40%",
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#FBD0E6",
    marginRight: "auto",
    marginLeft: "auto",
  },
  text: {
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default UserDetails;
