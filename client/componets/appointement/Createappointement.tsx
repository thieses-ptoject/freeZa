import React, { useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { TextInput } from 'react-native-gesture-handler'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
let data = [
  { label: 'Item 1', value: '1' },

]
const Createappointement = ({route}:any) => {
  const [firstName, setFirstName] = useState( "");
  const [value, setValue] = useState<string>('');
  const [data, setData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const { user1 } = route.params
  console.log('this is the user ',user1)
  return (
   <View style={styles.container}>
    <View>
    <Image

source={{ uri: user1.image }}
style={styles.image1}
/>
 <Text style={styles.name}>{user1.firstName} {user1.lastName}</Text>
    </View>
    <View style={styles.container1}>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.text}
                selectedTextStyle={styles.text}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {

                  setValue(item.id);

                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>
    <View style={styles.view3}>
              <Text style={styles.text}>FirstName</Text>
              <View style={styles.view4}>
                <View style={styles.inputstyle}>
                  <Ionicons
                    name="account-outline"
                    size={25}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    placeholder="FirstName"
                    value={firstName}
                    onChangeText={(value) => setFirstName(value)}
                    editable={true}
                  />
                </View>
              </View>
            </View>
   </View>
  )
}

export default Createappointement
const styles = StyleSheet.create({
 container:{

  backgroundColor: 'white',
  flex:1,
 },
 container1:{
  marginTop:'20%'
 },
 image1: {
  height: 90,
  width: 90,
  borderRadius: 70,
  marginRight: 'auto',
marginLeft:'auto',
marginTop:'20%',
  alignSelf: 'flex-start'
},
name: {
 marginTop:5,
 fontSize:20,

  marginRight: 'auto',
 marginLeft:'auto',
  
},
icon: {
  marginRight: 5,
  color: '#FC5A8D'
},
dropdown: {
  height: 44,
  width:'95%',
  alignSelf:'center',
  borderColor: "#F20B32",
  borderWidth: 1,
  borderRadius: 4,
  paddingHorizontal: 8,
}, text: {
  color: '#FC5A8D',
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: '600',
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
iconStyle: {
  width: 20,
  height: 20,
  color: '#FC5A8D'
},
view3: {
  flexDirection: "column",
  marginBottom: 6,
},
view4: {
  height: 44,
  width: "95%",
  borderColor: "#F20B32",
  borderWidth: 1,
  borderRadius: 4,
  marginVertical: 6,
  justifyContent: "center",
  paddingLeft: 8,
  backgroundColor: "#F7FCF4",
  alignSelf:'center'
}, 
 inputstyle: {
  flexDirection: "row",
  marginRight: "auto",
},
})