import React from "react";
import { StyleSheet, View } from "react-native";
import UserDetails from "./user";
import { ScrollView } from "react-native-gesture-handler";
const UserList = ({ users , navigation }: any) => {
  console.log(users, "jsklqjdksqjsqdnsqdjsqkldd");
  return (
    <View style={styles.bigContainer}>
      <ScrollView horizontal>
        {users?.map((user: object, index: number) => {
          return (
            <View>
              <UserDetails user={user} index={index} navigation = {navigation} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    flexDirection: "row",
    overflow: "scroll",
  },
});

export default UserList;
