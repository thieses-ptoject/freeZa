import React from 'react'
import { Image, SafeAreaView,  ScrollView,  View } from 'react-native'
import { Text } from 'react-native-animatable'

const Notifications = ({route}:any) => {
   const {user,notification}=route.params
   console.log(notification,'aaaaaaa')
  return (
    <SafeAreaView>
        <ScrollView style={{gap:10}}>
        <Text style={{marginTop:20,alignSelf:'center',fontSize:20,marginBottom:50}}>Notifications</Text>
       <View style={{gap:10}}>  
    {notification.map((noti:any)=>{
        return (

            <View style={{width:'100%',height:80,flexDirection:'row',borderBottomWidth:1,}}>
                 <Image
          source={{ uri: noti.sendernotificationRate.image }}
          resizeMode="contain"
          style={{
            height: '90%',
            width: 50,
            borderRadius: 999,
            borderColor: "#FC5A8D",
            borderWidth: 2,
            objectFit: "cover",
          }}
        />
                 <Text style={{marginLeft:2,alignSelf:'center'}}>{noti.sendernotificationRate.firstName} {noti.sendernotificationRate.lastName} has rated you {noti.rate} starts.</Text>
            </View>
        )
    })
   }
   </View> 
   </ScrollView>
    </SafeAreaView>
  )
}

export default Notifications
