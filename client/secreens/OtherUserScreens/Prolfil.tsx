import * as React from "react";
import { View,StyleSheet, Button, Alert, SafeAreaView} from "react-native";
 import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
 } from "react-native-paper"


export const OtheruserProfile = ({ navigation }: any) => {
  return (

    <View style={styles.container} >
        <Text onPress={() => navigation.navigate("Wishlist")}> follower </Text>
        <Button
        title="click here"
        onPress={()=>alert("button clicked")}
        ></Button>
        </View>
      
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})