import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
  Alert,
  Dimensions,
  Platform,
} from "react-native";
import { AuthContext } from "../../useContext/authContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { ItemsDetails } from "../../secreens/OtherUserScreens/ItemsDetails";

interface AuthContextType {
  products: Products[];
  isLoading: boolean;
  isError: boolean;
}
export const ProductList = ({navigation}:any) => {
  const { products, isLoading, isError, filteredProducts } = useContext(AuthContext);
  const landscape = useDeviceOrientation(landscape)
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        <Text>Error fetching product data</Text>
      </View>
    );
  }
  function displayFreeza(straws: number) {
    const strawberryArray = [];
    for (let i = 0; i < straws; i++) {
      strawberryArray.push(
        <View style={styles.strawberryFunction} key={i}>
          <Image
            style={styles.strawberry}
            source={require("../../assets/strawberry.png")}
          />
        </View>
      );
    }
    return strawberryArray;
  }
  return (
    <KeyboardAwareScrollView>
      <View style={styles.bigContainer}>
        <View style={styles.container}>
          {filteredProducts?.map((product: any) => (
             <View key={product.id} style={[styles.productContainer, { width: landscape === "landscape" ? "32.39%" : "48.5%"}]}>
              <View style={[styles.imageContainer,{marginLeft: Platform.OS === "ios" ? "auto" : "auto" , marginRight: Platform.OS === "ios" ? "auto" : "auto" }]}>
                <Pressable onPress={()=>navigation.navigate("ItemsDetails", { 
                    itemData :  product
                  })}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: product.image[0],
                    }}
                  />
                </Pressable>
              </View>

              <View style={{ alignItems: "center" }}>
                <View style={styles.textContainer}>
                  <Pressable  >
                  <Text style={styles.text}>{product.name}</Text>
                  </Pressable>
                </View>
                <View style={styles.strawTextContainer}>
                  <View style={styles.strawberryContainer}>
                    {displayFreeza(product.strawberries)}
                  </View>
                  <View style={styles.locationContainer}>
                    <Text style={styles.location}>{product.location}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  strawberryFunction: {
    flexDirection: "column",
  },
  locationContainer: {
    flexDirection: "row",
    width: 70,
    marginRight: 5,
  },
  strawberryContainer: {
    width: "65%",
    flexDirection: "row",
  },
  location: {
    color: "green",
    marginTop: 5,
    flexDirection: "row",
  },
  strawberry: {
    height: 30,
    width: 20,
  },
  strawTextContainer: {
    flexDirection: "row",
    backgroundColor: "#FFDAE9",
    borderRadius: 50,
    width: "95%",
  },
  textContainer: {
    alignItems: "center",
  },
  bigContainer: {
    marginLeft: 4,
    marginRight: 3,
    marginTop: "9%",
  },

  productContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 270,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    width: "95%",
    height: "73%",
    marginTop:"3%",
    alignContent:"center",
   
  },
  image: {
    height: '100%',
    borderRadius: 20,
    width: '100%',
  },
  container: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 5,
  },
});
