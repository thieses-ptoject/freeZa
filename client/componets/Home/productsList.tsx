import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
  Alert,
} from "react-native";
import { AuthContext } from "../../useContext/authContext";

interface AuthContextType {
  products: Products[];
  isLoading: boolean;
  isError: boolean;
}
export const ProductList = () => {
  const { products, isLoading, isError } = useContext(AuthContext);
  console.log(products[0].image, "--------------------");

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  console.log(products);
  if (isError) {
    return (
      <View>
        <Text>Error fetching product data</Text>
      </View>
    );
  }

  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        {products.map((product: any) => (
          <View key={product.id} style={styles.productContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/freeza2-88e58.appspot.com/o/images%2Fimage_1704823144084.jpg?alt=media&token=efc68977-1c6e-458b-8bbd-4f879d4af7d2",
                }}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text}>{product.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
  },
  bigContainer: {
    marginLeft: 4,
    marginRight: 3,
    marginTop: "7%",
  },
  productContainer: {
    
   
    
    borderRadius: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    width: 190,
    height: 200,
    borderRadius: 20,
  },
  container: {
    flexDirection: "row",
    width: "100%",
  },
  text: {
    color: "black",
    position: "relative",
    fontWeight: "bold",
    fontSize: 18,
  },
});
