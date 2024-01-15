import { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text, Platform, Pressable } from "react-native";
import { AuthContext } from "../../useContext/authContext";
import { filterProducts } from "../../React-query/homeProducts/products";
import { Types } from "./types";
import { TypesData } from "./data";

export const Categories = ({ navigation }: any) => {
  const { products, setFilteredProducts } = useContext(AuthContext);
  const [FurnitureType , setFurnitureType] = useState(false)
  const [types , setTypes] = useState(TypesData)
console.log(types)
  const filterByCategory = (categoryId: number) => {
    // Filter products based on the selected category
    const filteredProducts = products.filter((product: any) => {
      return product.typeId === categoryId;
    });

    // Update the state with the filtered products
    setFilteredProducts(filteredProducts);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Details}>
          <Text style={styles.Text}>Furniture</Text>
          {/* onPress={() => filterByCategory(1) */}
          <Pressable  onPress={()=>setFurnitureType(!FurnitureType)} >
            <View style={styles.circle}>
              <Image source={require('../../assets/furniture.png')} style={styles.imageInCircle} />
            </View>
          </Pressable>
        </View>
        <View style={styles.Details}>
          <Text style={styles.Text}>Gadgets</Text>
          <Pressable onPress={() => filterByCategory(2)}>
            <View style={styles.circle}>
              <Image source={require("../../assets/gadgets.png")} style={styles.imageInCircle} />
            </View>
          </Pressable>
        </View>
        <View style={styles.Details}>
          <Text style={styles.Text}>Presents</Text>
          <Pressable onPress={() => filterByCategory(3)}>
            <View style={styles.circle}>
              <Image source={require("../../assets/presents.png")} style={styles.imageInCircle} />
            </View>
          </Pressable>
        </View>
        <View style={styles.Details}>
          <Text style={styles.Text}>Others</Text>
          <Pressable onPress={() => setFilteredProducts(products)}>
            <View style={styles.circle}>
              <Image source={require("../../assets/other.png")} style={styles.imageInCircle} />
            </View>
          </Pressable>
        </View>
      </View>
        {
          FurnitureType && <Types data = {TypesData}/>
        }
    </View>
  );
};
const styles= StyleSheet.create({
container: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15
},
 circle: {
    width: 88,
    height: 88,
    backgroundColor: "#FBD0E6",
    borderRadius: 100,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    ...Platform.select({
      ios:{
        shadowOpacity: 0.1
      },
      android: {
        shadowOpacity: 0.2
      }
    }),
    shadowRadius: 16.0,
    elevation: 24,
  },
  imageInCircle: {
    width: "80%",
    height: "80%",
    borderRadius: 100,
  },
  Text:{
    fontWeight:"700",
  },
  Details:{
    flexDirection:'column-reverse', alignItems:'center' , justifyContent:'center'
  }


})