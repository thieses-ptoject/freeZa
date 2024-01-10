import React from 'react'
import { View ,Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const BlogPage = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.allCategory}>
          <Text style={styles.testAll}>All</Text>
          <Text style={styles.testAll}>Most Commented</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default BlogPage
const styles = StyleSheet.create({
  testAll:{
   paddingTop:2,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    color:'#FC5A8D'
  },
allCategory:{
  justifyContent: 'space-between',
  flexDirection:'row', 
  padding:10,

}
})