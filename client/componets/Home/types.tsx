import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Types = ({data} : any) => {
    console.log(data[1], "jqskldjqskldjkqjdkjsqlkdklqjdlkqkjdkqjkldjlqskjdksqkdjlksqd")
  return (
   <View style ={styles.bigContainer}>
    <Text>hi</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    bigContainer :{
        backgroundColor: "#fff",
        height: "100%"
    }
})
