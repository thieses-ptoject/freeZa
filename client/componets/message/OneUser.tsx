import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import { prependOnceListener } from 'process'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { View, Text, Image } from 'react-native-animatable'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
const OneUser = ({ currentUser, message }: any) => {
  const navigation = useNavigation()

  return (
    <View>
      {currentUser === message.recieverId &&
        <Pressable onPress={() => { navigation.navigate("Chatscreen", { user: message.sender, currentUser: currentUser }) }}>
          <View style={styles.view1} >

            <Avatar
              rounded
              source={{ uri: message.sender.image }}
              size="medium"
            />
            <Badge
              status="success"
              containerStyle={{ position: 'absolute', top: 0, right: 5, width: 10 }}

            />
            <View>
            
                <Text style={[styles.text1, { flexDirection: 'column' }]}>
                  {message.sender.firstName} {message.sender.lastName}
                </Text>
              
              <Text style={styles.text2}>{message.message}</Text>
              <Text style={styles.text2}>{moment(message.createdAt, "YYYYMMDD").fromNow()}</Text>
            </View>

          </View>
        </Pressable>}
      {currentUser === message.senderId &&
        <Pressable onPress={() => navigation.navigate("Chatscreen", { user: message.recivermessage, currentUser: currentUser })}>
          <View style={styles.view1}>

            <View>
              <Avatar
                rounded
                source={{ uri: message.recivermessage.image }}
                size="medium"
              />
              <Badge
                status="success"
                containerStyle={{ position: 'absolute', top: 0, right: 5,  }}
              />
            </View>
            <View style={{ gap: 1, marginLeft: 5 }}>

              <Text style={[styles.text1, { flexDirection: 'column', }]}>
                {message.recivermessage.firstName} {message.recivermessage.lastName}
              </Text>
              <Text style={styles.text2}>{message.message}</Text>
              <Text style={styles.text2}>{moment(message.createdAt, "YYYYMMDD").fromNow()}</Text>
            </View>

          </View></Pressable>}
    </View>
  )
}

export default OneUser
const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: 10,
    top: "auto",
    marginBottom: "auto",
  },
  text1: {
    fontSize: 17,
    fontWeight: "700",


  },
  connected: {
    height: 10,
    width: 10,
    borderRadius: 70,
    backgroundColor: 'green'
  },

  view1: {
    flexDirection: "row",
    padding: 10,
    top: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    backgroundColor: "#FFECF6",
    borderRadius: 1000,
    borderColor: "#fff",
    borderWidth: 2,
  },
  text2: {
    fontSize: 12,
    opacity: 0.7,
  },
})
