import React, {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from "../../useContext/authContext";

export const ProfileBody = ()=>{
    const {  user,setUser} = useContext(AuthContext);
  return (
    <View>
      {user ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {user.firstName} {user.lastName}
            </Text>
            {/* <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'black',
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            /> */}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
              }}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={{ uri: user.image}}
            style={{
              resizeMode: 'cover',
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          {/* <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
            }}>
            {user.firstName}
          </Text> */}
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{user.rate}</Text>
          <Text>Rate</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{user.nbrOfDonation}</Text>
          <Text>Donation</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{user.strawberries}</Text>
          <Text>Note</Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileButtons = ({ navigation  }: any) => {
    
    const {  user,setUser} = useContext(AuthContext);
  
       return (
    <>
      {user ? (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              console.log("Pressed Ionicons");
              navigation.navigate("EditProfil");
            }}
            style={{
              width: '100%',
            }}>
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                borderColor: '#DEDEDE',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                }}>
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};