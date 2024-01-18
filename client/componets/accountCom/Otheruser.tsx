import * as React from "react";
import { ActivityIndicator, Image, StyleSheet, Text,View} from "react-native";
import { UserItems } from "../../React-query/user/otherUserProfil";
import Swiper from "react-native-swiper";

const Backgroundprofile = ({ navigation , idProfil }: any) => {


    const { data, isLoading, isError, refetch, isSuccess } = UserItems(idProfil);
 
console.log(data,"zzzzzzzzzzzzzzzzzzzzzzzzzzz")

    if (isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
    if (isError) {
      return (
        <View>
          <Text>Error fetching user data</Text>
        </View>
      );
    }
  return (
    
    <View style={styles.sliderContainer}>
    <Swiper autoplay horizontal={false} height={200} activeDotColor="#FFECF6">
    {data?.map((item, index) => (
      <View key={index} style={styles.slide}>
        <Image
          source={{ uri: item.image[0] }}
          resizeMode="cover"
          style={styles.sliderImage}
        />
   
      </View> ))}
    </Swiper>
    </View>
     
  );
};


const styles = StyleSheet.create({
    safearea: {
      flex: 1,
      backgroundColor: "#FFF8FB",
    },
    StatusBarStyle: {
      flex: 1,
    },
  
  
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
  });


  export default Backgroundprofile;