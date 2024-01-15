import { SafeAreaView, StyleSheet, View, Image, Text, Platform } from "react-native"

export const Categories=({ navigation } : any)=>{
    return(
        <View style={styles.container}>
            <View style={styles.Details}>
                <Text style={styles.Text}>Furniture </Text>
            <View style={styles.circle} >
              <Image source={require('../../assets/furniture.png')} style={styles.imageInCircle}/>
            </View>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Text}>Gadgets</Text>
            <View style={styles.circle} >
              <Image source={require("../../assets/gadgets.png")} style={styles.imageInCircle}/>
            </View>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Text}>Presents</Text>
            <View style={styles.circle} >
              <Image source={require( "../../assets/presents.png")} style={styles.imageInCircle}/>
            </View>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Text}>Others</Text>
            <View style={styles.circle} >
              <Image source={require("../../assets/other.png")} style={styles.imageInCircle}/>
            </View>
            </View>
            </View>
    )
}
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