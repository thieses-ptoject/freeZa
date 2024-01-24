import React, { useState } from 'react'
import { ActivityIndicator, Alert, Button, Image, Pressable } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { TextInput } from 'react-native-gesture-handler'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native'
import { UserItem, UserItems } from '../../React-query/user/otherUserProfil'
import { addappointement } from '../../React-query/appointement/appointement'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Createappointement = ({ route }: any) => {
  const [time, setTime] = useState("");
  const [value, setValue] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);

  const { user1, currentUser } = route.params
  const navigation = useNavigation()
  const { data: allitem, isLoading, isError, isSuccess, refetch, error } = UserItem(currentUser);
 const addapp=addappointement()

  const filterData = () => {
    let data1=allitem?.filter((ele:any)=>{return ele.state==="available" })

    let data = data1?.map((ele: any) => { return { label: ele.name, value: ele.id } })
    return data
  }

  
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (isError) {
    <View>
      <Text>Error fetching user data</Text>
    </View>;
  }
  
  return (
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      
      <Pressable onPress={() => { navigation.navigate('OtheruserProfile', { id: user1 }) }}>
        <View >
          <Image

            source={{ uri: user1.image }}
            style={styles.image1}
          />
          <View style={{ flexDirection: 'row', gap: 5, marginLeft: 'auto', marginRight: 'auto' }}>
            <Entypo

              color={'#FC5A8D'}
              name="user"
              size={20}
              style={{ marginTop: 10 }}

            />
            <Text style={styles.name}>{user1.firstName} {user1.lastName}</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.container1}>
        <View style={styles.view3}>
          <Text style={styles.text}>Item</Text>
          {isSuccess && <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.text}
            selectedTextStyle={styles.text}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={allitem}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item: any) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="shoppingcart"
                size={20}
              />
            )}
          />}
        </View>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>Time</Text>
        <View style={styles.view4}>
          <View style={styles.inputstyle}>
            <Ionicons
              name="time-sharp"
              size={20}
              style={styles.iconStyle}
            />
            <TextInput
              placeholder="time"
              value={time}
              onChangeText={(value) => setTime(value)}
              editable={true}
              multiline
            />
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>Location</Text>
        <View style={styles.view4}>
          <View style={styles.inputstyle}>
            <Ionicons
              name="location"
              size={20}
              style={styles.iconStyle}
            />
            <TextInput
              placeholder="Location"
              value={location}
              onChangeText={(value) => setLocation(value)}
              editable={true}
              multiline
            />
          </View>
        </View>
      
      </View>
      <Pressable onPress={()=>{addapp.mutate({time:time, giverId:currentUser, reciverId:user1.id, ItemId:+value, location:location})
     navigation.navigate('Home')}}>
      <View style={styles.botton}>
        <Text style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>Add appointement</Text>
     </View>
     
     </Pressable>
      </View></KeyboardAwareScrollView>
  )
}

export default Createappointement
const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    flex: 1,
  },
  container1: {
    marginTop: '20%'
  },
  image1: {
    borderColor: "#FC5A8D",
    borderWidth: 2,
    height: 150,
    width: 150,
    borderRadius: 70,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '20%',
    alignSelf: 'flex-start'
  },
  name: {
    marginTop: 5,
    fontSize: 20,


  },
  icon: {
    marginRight: 5,
    color: '#FC5A8D'
  },
  dropdown: {
    height: 44,
    width: '100%',
    alignSelf: 'center',
    borderColor: "#F20B32",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: "#F7FCF4",
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
    marginTop: 20,
    alignSelf: 'center',
    width: "95%",
  },
  botton: {
    marginTop: 20,
    alignSelf: 'center',
    width: "95%",
    justifyContent: "center",
    backgroundColor: '#FC5A8D',
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    borderColor: "#F20B32"

  },
  view4: {
    height: 44,

    borderColor: "#F20B32",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
    backgroundColor: "#F7FCF4",

  },
  inputstyle: {
    flexDirection: "row",
    marginRight: "auto",
  },
})