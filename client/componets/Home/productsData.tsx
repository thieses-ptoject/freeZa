import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { AuthContext } from "../../useContext/authContext";
import { ProductList } from "./productsList";

export const Products = ({ navigation }: any) => {
  const { products, isLoading, isError } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#FC5A8D" />
      </View>
    );
  }
  if (isError) {
    <View>
      <Text>Error fetching user data</Text>
    </View>;
  }

  return (
    <View>
      <ProductList navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({

});
