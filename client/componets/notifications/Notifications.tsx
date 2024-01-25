import axios, { Axios } from 'axios'
import React, { useEffect } from 'react'
import { Alert, Image, Pressable, SafeAreaView, ScrollView, View } from 'react-native'
import { Text } from 'react-native-animatable'
import config from "../../config.json"
import Entypo from 'react-native-vector-icons/Entypo';


const Notifications = ({ route, navigation }: any) => {
    const { user, notification } = route.params
    useEffect(() => {
        axios.put(`http://${config.ip}:3001/notificationsRate/${user.id}`,)
    }, [])
    const deleteNotification=async(id:number)=>{
        console.log(id)
        axios.delete(`http://${config.ip}:3001/notificationsRate/${id}`).then(()=>console.log("done")).catch((err)=>console.log(err))
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView >
                <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 20, marginBottom: 50 }}>Notifications</Text>
                <View >
                    {notification.map((noti: any) => {
                        return (

                            <View style={{ width: '100%', height: 80, flexDirection: 'row', borderBottomWidth: 5, padding: 9, borderBottomColor: 'white', backgroundColor: noti.isRead ? "#FFF9FC" : 'pink' }}>
                                <Pressable onPress={() => { navigation.navigate('OtheruserProfile', { id: user }) }}>
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
                                            marginRight: 3,

                                        }}
                                    /></Pressable>
                                <Text style={{ marginLeft: 2, alignSelf: 'center', color: noti.isRead ? "grey" : 'black', fontWeight: 'bold', textTransform: "capitalize", }}>{noti.sendernotificationRate.firstName} {noti.sendernotificationRate.lastName} </Text>
                                <Text style={{ marginLeft: 2, alignSelf: 'center', color: noti.isRead ? "grey" : 'black' }}>: has rated you {noti.rate} stars.</Text>
                                <Pressable onPress={() => {
                                    Alert.alert('delete', 'Delete notification', [
                                        {
                                            text: 'cancel',
                                            onPress: () => console.log('Cancel Pressed'),
                                            style: 'cancel',
                                        },
                                        { text: 'OK', onPress: () => {deleteNotification(noti?.id);navigation.navigate('Home') }},
                                    ])
                                }}>
                                    <Entypo name={'dots-three-horizontal'} size={20} color={'black'} style={{ marginLeft: '35%', marginRight: 1 }} />
                                </Pressable>
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
