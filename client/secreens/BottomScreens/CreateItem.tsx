
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, Modal, Alert, TouchableOpacity, Pressable, Platform, Button } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavBar } from '../../componets/Home/NavBar';
import { Color, Border } from "../../GlobalStyles/GlobalStylesCreateItem";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { addItem, getCategory, getType } from '../../React-query/createItem/createItem';
import * as firebase from '../../firebase';
import { storage } from '../../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { filterConfig } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
const camera = require('../../assets/CreateItem/camera.png')
const arrow = require('../../assets/CreateItem/rightarrow.png')
let data = [
  { label: 'Item 1', value: '1' },

]


const CreateItem: React.FC = ({ navigation }: any) => {
  const [text, onChangeText] = React.useState('');
  const [changeName, onChangeName] = React.useState('');
  const [value, setValue] = useState<string>('');
  const [description, setDescription] = useState('')
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusStraw, setIsFocusStrawberries] = useState(false);
  const [isFocusType, setIsFocusType] = useState(false);
  const [isFocusTypes, setIsFocusTypes] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState<null | string>(null);
  const [typeValue, setTypeValue] = useState<number>();
  const [type, setType] = useState([])
  const [exclusive, setExclusive] = useState('')
  const [data1, setData1] = useState([
    { label: 'Item 1', value: 1 },

  ])
  const [types, setTypes] = useState([
    { label: 'old', value: 'old' }, { label: 'new', value: 'new' }
  ])
  const [strawberies, setStrawberies] = useState([
    { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }, { label: '5', value: '5' }
  ])
  const [exclusives, setExclusives] = useState([
    { label: 'Yes', value: 'true' }, { label: 'No', value: 'false' }
  ])
  const [valueTypes, setValueTypes] = useState<string>('');

  const [nbrOfStraw, setNbrOfStraw] = useState<number>()
  const { data: category, isLoading, isError, isSuccess } = getCategory();
  const additem = addItem()
  console.log(category)
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,

      quality: 1,
    });

    if (result && 'uri' in result) {
      // Check if 'uri' property exists on the result object
      uploadImage(result.uri as string, 'image').then(() => {
        Alert.alert('imagesaved')
      }).catch((error) => { console.error('Firebase Storage Error:', error.code, error.message); Alert.alert("error") })
    } else {

      console.error("URI not found in image picker result");
    }
  };


  const uploadImage = async (uri: any, imageName: string) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      imageName = `image_${Date.now()}.jpg`;


      const imageRef = ref(storage, `images/${imageName}`);


      await uploadBytes(imageRef, blob);


      const downloadURL = await getDownloadURL(imageRef);
      console.log('Image uploaded successfully. Download URL:', downloadURL);
      setImage(downloadURL);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }

  };
  const gettype = (val: number) => {
    let data1 = category.filter((ele: Category) => {
      return ele.id = val
    })
    return data1[0].Types
  }

  const filterData = () => {
    let data = []
    data = category?.map((ele: Category) => { return { label: ele.name, value: ele.id } })
    return data
  }
  const filterData1 = (arr: any) => {
    let data1 = []
    data1 = arr?.map((ele: type) => { return { label: ele.type, value: ele.id } })
    console.log(data1, 'eeeeeeeeeeeeeeeeeeeeeee')
    return data1
  }

  if (isSuccess) {

    data = filterData()

  }
  return (
    <KeyboardAwareScrollView>

      <SafeAreaView style={styles.container} >

        <ScrollView>
          <View style={styles.souscontainer}>

            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeName}

                placeholder="Name"

              />

              <View style={styles.line}>
                <Text style={styles.text}>Image</Text>
                <Pressable onPress={() => { pickImage() }}>
                  <Image source={camera} style={styles.rectangle} />
                </Pressable>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.line} >
                  <Text style={styles.text}>Localisation</Text>
                  <Image
                    style={[styles.rightArrowIcon, styles.rightPosition]}

                    source={arrow}
                  />
                </View>
              </Pressable>
              {modalVisible && <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="location"

              />}


            </View>

            <View style={styles.container}>
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
                placeholder={!isFocus ? 'Select category' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {

                  setValue(item.value);

                  setData1(filterData1(gettype(+item.value)))
                  console.log(data1)
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
            {value && <View>
              <View style={styles.container}>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                  placeholderStyle={styles.text}
                  selectedTextStyle={styles.text}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data1}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select type' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocusType(true)}
                  onBlur={() => setIsFocusType(false)}
                  onChange={async (item) => {
                    setTypeValue(item.value);
                    setIsFocusType(false);
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
            </View>}
            <View style={styles.container}>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.text}
                selectedTextStyle={styles.text}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={types}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select state ' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocusTypes(true)}
                onBlur={() => setIsFocusTypes(false)}
                onChange={(item) => {
                  console.log(item.value, 'aaaaaaaaaaa')
                  setValueTypes(item.value);
                  setIsFocusTypes(false);
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
            <View style={styles.container}>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.text}
                selectedTextStyle={styles.text}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={strawberies}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select the number of strawberries' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocusStrawberries(true)}
                onBlur={() => setIsFocusStrawberries(false)}
                onChange={(item) => {
                  console.log(item.value, 'aaaaaaaaaaa')
                  setNbrOfStraw(+item.value);

                  setIsFocusStrawberries(false);
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
            <View style={styles.container}>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.text}
                selectedTextStyle={styles.text}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={exclusives}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'is it exclusive?' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocusTypes(true)}
                onBlur={() => setIsFocusTypes(false)}
                onChange={(item) => {
                  console.log(item.value, 'aaaaaaaaaaa')
                  setExclusive(item.value);
                  setIsFocusTypes(false);
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

            <TextInput
              numberOfLines={4}
              multiline={true}
              textAlignVertical={"top"}
              onChangeText={setDescription}
              placeholder='description' style={styles.description}>
            </TextInput>
          </View>
          <Pressable >
            <TouchableOpacity onPress={() => {
              console.log("======================")
              const obj = {
                name: changeName,
                description,
                image:[image],
                type: valueTypes,
                location: text,
                state: 'available',
                typeId: typeValue,
                strawberries: nbrOfStraw,
                exclusive
              }
              additem.mutate({ obj })

            }}

              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Create a don</Text>
            </TouchableOpacity>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    gap: 100,
    marginTop: 10
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: '#FFECF6',
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 1,
  },
  souscontainer: {
    gap: 20
  },
  text: {
    color: '#FC5A8D',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  rectangle: {
    backgroundColor: "#FFECF6",
    height: 36,
    width: 36,
    shadowColor: "#000",
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  line: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    lineHeight: 100,
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 1,
    padding: 15
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profileChild: {
    right: 1,
    bottom: 0,
    opacity: 0.9,
    left: 0,
  },
  rightArrowIcon: {
    width: 12,
    top: 0,
  },
  rightArrowParent: {
    top: 5,
    left: 1,
  },
  rightPosition: {
    height: 25,
    right: 0,
  },
  donCreationChild2: {
    top: 438,
    left: 9,
    width: 339,
    height: 161,
    backgroundColor: Color.colorLavenderblush,
  },
  description: {
    color: "grey",
    opacity: 0.5,
    fontSize: 20,
    textAlign: "left",
    fontWeight: "300",
    backgroundColor: "#FFECF6",
    textAlignVertical: 'center',
    height: 80,
    paddingHorizontal: 20,
    borderRadius: 10,
    padding: 8
  },
  rectangleIconLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  buttonContainer: {
    paddingHorizontal: "30%",
    paddingVertical: "4%",
    backgroundColor: "#F20B32",
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    marginBottom: "5%",
    width: 5,
    alignSelf: 'flex-end',
    marginRight: 5,



  },
  buttonText: {
    color: "white",
    fontSize: 16,
    width: 100
  },
  dropdown: {
    height: 50,
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
    color: '#FC5A8D'
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#FC5A8D'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

});

export default CreateItem
