import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const WelcomeText = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.justForYou}>just For You!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  justForYou: {
    // top: 201,
    // left: 118,
    color: "#F20B32",
    alignItems: "center",
    justifyContent: "center",
    // alignSelf:'center',
    fontWeight: "700",
    top: 25,
    height: 25,
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 9999,
  },
});
