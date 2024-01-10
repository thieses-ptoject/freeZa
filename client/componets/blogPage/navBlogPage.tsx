import {
    View,Text,StatusBar,StyleSheet,Image,SafeAreaView,
    Pressable} from "react-native";
  // import straw from "../../assets/freeza.png";
  // import star from "../../assets/star.png"
  // import arrow from "../../assets/blogpage/vector.png"
  // import addblog from "../../assets/blogpage/add.png"
  
  
  
  
  export const NavBlogPage = ({navigation}:any) => {
   
    return (
      <SafeAreaView>
        <View  >
          <StatusBar backgroundColor="#ffff" />
          <View style={styles.rectangle}>
            <Pressable onPress={()=>navigation.navigate('Home')}>
          <Image source={arrow} style={{ width: 30,height: 30,marginStart:5}} />
          </Pressable>
            <View style={{flexDirection:"row-reverse" ,alignItems:"center"}}>
              <View style={styles.circle}>
                <Image source={straw} style={styles.imageInCircle} />
              </View> 
            </View> 
            <Image source={addblog} style={{ width: 30,height: 30,marginEnd:5}} />
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
     
      // flex:1,
      // top: 0,
      // left: 0,
      // width: 400,
      height: 68,
      backgroundColor:'white',
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
      // position: "relative",
      justifyContent: "center",
      alignItems: "center",
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
  