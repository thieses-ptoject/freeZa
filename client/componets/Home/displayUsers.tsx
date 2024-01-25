import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "react-native-animatable";
import UserList from "./userList";
import axios from "axios";
import config from "../../config.json";
import { AuthContext } from "../../useContext/authContext";
const DisplayUsers = ({ navigation }: any) => {
  const { users, setUsers, setAllUsers, allUsers } = useContext(AuthContext);
  console.log(users, "slmqkdlsqkdlskqldklsqklllllllllllsllllllmlllllllll");
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://${config.ip}:3001/user/`);
      setUsers(response.data);
      setAllUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <View style={styles.bigContainer}>
      <Text style={styles.text}>Our Community</Text>
      <UserList users={allUsers} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#F20B32",
    fontWeight: "700",
    marginBottom: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 9999,
  },
  bigContainer: {
    marginLeft: 5,
    marginTop: "6%",
    height: 250,
  },
});

export default DisplayUsers;
