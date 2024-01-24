
import * as React from "react";
import { Text,View,StyleSheet,Pressable} from "react-native";
import {ProfileBody , ProfileButtons} from "../../componets/accountCom/ProfileBody"
import BottomTabView from "../../componets/accountCom/BottomTabView"

export const InviteFreind = ({ navigation }: any) => {
  return (
   
    <View style={{width:"100%", height:"100%", backgroundColor:"white"}} >
       <View style={{width:"100%",padding:10}}>
<ProfileBody/>
< ProfileButtons navigation={navigation} />
       </View>
       <View>
        
      <BottomTabView />
      
    </View>
        </View>
      
  );
};

const styles = StyleSheet.create({

  container: {
   top:"50%",
   left:150
  },
})