import {
  View,Text,StatusBar,StyleSheet,Image,SafeAreaView,
  Pressable} from "react-native";
import straw from "../../assets/freeza.png";
import star from "../../assets/star.png"
import bell from "../../assets/bell.png"
import strawberry from "../../assets/strawberry.png"
import search from "../../assets/search.png"




export const NavBar = ({navigation}:any) => {
 
  return (
    <SafeAreaView>
      <View  >
        <StatusBar backgroundColor="#ffff" />
        <View style={styles.rectangle}>
          <View style={{flexDirection:"row-reverse" ,alignItems:"center"}}>
            <Text style={styles.Freeza}>FreeZa</Text>
            <View style={styles.circle}>
              <Image source={straw} style={styles.imageInCircle} />
            </View> 
          </View> 
          <View style={{ flexDirection: "row" , gap:25}}>
            <Pressable onPress={()=>navigation.navigate("blog")}>
            <Image source={star} style={styles.star} />
            </Pressable>
            <Image source={strawberry} style={styles.strawberry}/>
            <View style={styles.badgeContainerStraw}>
      <Text style={styles.badgeTextStraw}>0</Text>
           </View>
            <Image source={bell} style={styles.notification}/>
            <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>0</Text>
            </View>
            <Image source={search} style={styles.search}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}; 
// const Badge = () => {
//   return (
//     <View style={styles.badgeContainer}>
//       <Text style={styles.badgeText}>0</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    // position: 'relative',
  },
  rectangle: {
    position: "relative",
    // flex:1,
    // top: 0,
    // left: 0,
    // width: 400,
    height: 68,
    backgroundColor: "#FBD0E6",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },
  circle: {
    width: 56,
    height: 55,
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
    shadowOpacity: 0.2,
    shadowRadius: 16.0,
    elevation: 10,
  },
  imageInCircle: {
    width: "80%",
    height: "80%",
    borderRadius: 100,
  },
  Freeza:{
   color: "#78CA46",
   fontSize:32,
   fontWeight:"700",
   paddingLeft:5
  }, 
  star :{
  width: 21,
  height: 20,
  alignSelf:'center',
  // top:20
},
strawberry :{
  width: 21,
  height: 35,
  alignSelf:'center',
  // top:18
},
search :{
  width: 21,
  height: 25,
  alignSelf:'center',
  right:5
},
notification :{
  width: 21,
  height: 30,
  alignSelf:'center',
  // top:18
},
badgeContainer: {
  position: 'absolute',
  top: 0,
  right: 58,
  backgroundColor: 'white', // Customize the badge background color
  borderRadius:10,
  paddingHorizontal: 4,
  paddingVertical: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
badgeText: {
  color: 'red', // Customize the badge text color
  fontSize: 12,
  fontWeight: 'bold',
}, 

badgeContainerStraw: {
  position: 'absolute',
  top: 0,
  right: 105,
  backgroundColor: 'white', // Customize the badge background color
  borderRadius:10,
  paddingHorizontal: 4,
  paddingVertical: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
badgeTextStraw: {
  color: 'red', // Customize the badge text color
  fontSize: 12,
  fontWeight: 'bold',
},

});
