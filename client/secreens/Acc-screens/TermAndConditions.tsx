
import * as React from "react";
import { Text,View,StyleSheet,Pressable} from "react-native";


export const TermAndConditions= ({ navigation }: any) => {
  return (
   
    <View style={styles.container} >
        <Text onPress={() => navigation.navigate("Wishlist")}> Term And Conditions</Text>
        </View>
      
  );
};

const styles = StyleSheet.create({

  container: {
   top:"50%",
   left:150
  },
})