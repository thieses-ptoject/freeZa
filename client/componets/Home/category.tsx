import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text, Platform, Pressable } from "react-native";
import { AuthContext } from "../../useContext/authContext";
import { filterProducts } from "../../React-query/homeProducts/products";
import { Types } from "./types";
import { TypesData } from "./data";
import { OthersType } from "./othersType";
import { getTypes } from "../../React-query/homeProducts/products";
import { getCategories } from "../../React-query/homeProducts/products";

export const Categories = ({ navigation }: any) => {
  const { products, setFilteredProducts } = useContext(AuthContext);
  const [view , setView] = useState(false)
  const [types , setTypes] = useState(TypesData.furnitureTypes)
  const [otherView, setOtherView] = useState(false)
  const [categoryId, setCategoryId] = useState(1)
  const {data: dataOfType}= getTypes(categoryId)
  
  
    console.log(dataOfType,"fffffffffffffff")
console.log(TypesData.furnitureTypes)
  const filterByCategory = (categoryId: number) => {
    // Filter products based on the selected category
    const filteredProducts = products.filter((product: any) => {
      return product.typeId === categoryId;
    });
 console.log(categoryId)
    // Update the state with the filtered products
    setFilteredProducts(filteredProducts);
  };
    useEffect(() => {
    // Fetch data when categoryId changes
   console.log(categoryId)

  }, [categoryId])
  return (
    <View>
{  (!view || otherView)  &&    <View style={styles.container}>
        <View style={styles.Details}>
          <Text style={styles.Text}>Furniture</Text>
          {/* onPress={() => filterByCategory(1) */}
          <Pressable  onPress={()=>{
            setCategoryId(3)
            setView(!view)
            setTypes(TypesData.furnitureTypes)
            }} >
            <View style={styles.circle}>
              <Image source={require('../../assets/furniture.png')} style={styles.imageInCircle} />
            </View>
          </Pressable>
        </View>
        <View style={styles.Details}>
          <Text style={styles.Text}>Electronics</Text>
          <Pressable onPress={()=>{
            setCategoryId(6)
           setView(!view)
           setTypes(TypesData.gadgetTypes)
          }}>
            <View style={styles.circle}>
              <Image source={require("../../assets/gadgets.png")} style={styles.imageInCircle} />
            </View>
          </Pressable>
        </View>
        <View style={styles.Details}>
          <Text style={styles.Text}>House</Text>
          <Pressable onPress={ () => {
            setCategoryId(4)
            setView(!view)
            setTypes(TypesData.presentTypes)
          }}>
            <View style={styles.circle}>
              <Image source={require("../../assets/house.png")} style={styles.imageInCircle} />
            </View>
          </Pressable>
        </View>
        <View style={styles.Details}>
          <Text style={styles.Text}>Others</Text>
          <Pressable onPress={() => {
            setOtherView(!otherView)
            }}>
            <View style={styles.circle}>
              <Image source={require("../../assets/other.png")} style={styles.imageInCircle} />
            </View>
          </Pressable>
        </View>
      </View>}
        {
          view && <Types data = {dataOfType}  setView ={setView} categoryId={categoryId}/>
        }
       {
          otherView && <OthersType  setView={setOtherView}/>
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