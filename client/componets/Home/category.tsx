import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native"
import furniture from '../../assets/furniture.png'
import gadgets from "../../assets/gadgets.png"
import presents from"../../assets/presents.png"
import other from "../../assets/other.png"

export const Categories=({ navigation })=>{
    return(
        <View style={styles.container}>
            <View style={styles.Details}>
                <Text style={styles.Text}>Furniture </Text>
            <View style={styles.circle} >
              <Image source={furniture} style={styles.imageInCircle}/>
            </View>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Text}>Gadgets</Text>
            <View style={styles.circle} >
              <Image source={gadgets} style={styles.imageInCircle}/>
            </View>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Text}>Presents</Text>
            <View style={styles.circle} >
              <Image source={presents} style={styles.imageInCircle}/>
            </View>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Text}>Others</Text>
            <View style={styles.circle} >
              <Image source={other} style={styles.imageInCircle}/>
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
    shadowOpacity: 0.58,
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