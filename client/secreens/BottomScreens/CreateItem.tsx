
import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, Modal, Alert, TouchableOpacity, Pressable } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavBar } from '../../componets/Home/NavBar';
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles/GlobalStylesCreateItem";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getCategory } from '../../react-query/createItem/createItem';


const camera = require('../../assets/CreateItem/camera.png')
const arrow = require('../../assets/CreateItem/rightarrow.png')

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];


const CreateItem: React.FC = () => {
  const [text, onChangeText] = React.useState('');
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { data:category, isLoading, isError } = getCategory ();

  // if (isLoading) {return <h1>Loading</h1>; }
  // if (isError) {return <h1>Error</h1>};
 console.log(category, "=========================");
 

  return (
    <KeyboardAwareScrollView>

      <SafeAreaView style={styles.container} >
        <NavBar />
        <ScrollView>
          <View style={styles.souscontainer}>
            <View>
              <View style={styles.line}>
                <Text style={styles.text}>Image</Text>
                <Image source={camera} style={styles.rectangle} />
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
            <Pressable
               onPress={() => setModalVisible(true)}>
              <View style={styles.line} >
                <Text style={styles.text}>Localisation</Text>
                <Image
                  style={[styles.rightArrowIcon, styles.rightPosition]}

                  source={arrow}
                />
              </View>
              </Pressable>
              {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                  
                }}> */}
                  {modalVisible&&<TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="localisation"

                  />}
                {/* </Modal> */}

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
                onChange={item => {
                  setValue(item.value);
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
            <View />
            <TextInput
              numberOfLines={4}
              multiline={true}
              textAlignVertical={"top"}
              placeholder='description' style={styles.description}>
            </TextInput>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Create a don</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    gap: 150
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: '#FFECF6'
  },
  souscontainer: {
    gap: 20
  },
  text: {
    color: '#FC5A8D',
    fontSize: 20,
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
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    fontWeight: "600",
    backgroundColor: "#FFECF6",
    textAlignVertical: 'top',
    height: 80,
    paddingHorizontal: 20,
    borderRadius: 60
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
    marginTop: "12%",
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
