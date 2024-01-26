import React, { useContext, useEffect, useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, FlatList, useWindowDimensions, ActivityIndicator} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import { TabBar } from 'react-native-tab-view';
import { AuthContext } from "../../useContext/authContext";
import { UserItems, UserPosts } from "../../React-query/user/otherUserProfil";
import { useIsFocused } from '@react-navigation/native';


const BottomTabView = ({ navigation, route }: any) => {

  const {  user,setUser} = useContext(AuthContext);
  const Tab = createMaterialTopTabNavigator(); 
  const focused = useIsFocused()





  const {
    data: userData,
    isLoading: userDataLoading,
    isError: userDataError,
    refetch:refetchuserData,
    isSuccess,
  } = UserItems(user.id);
  const {
    data: userPostsData,
    isLoading: userPostsLoading,
    isError: userPostsError,
    refetch:refetchuserPost,
  } = UserPosts(user.id);


  useEffect(() => {
    refetchuserData()
    refetchuserPost()
  }, [focused]);

  const Posts = ({ navigation, route }: any) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          <FlatList
        data={userData}
        keyExtractor={(ele) => ele.id}
        numColumns={3}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              aspectRatio: 1,
              margin: 3,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ItemsDetails", { itemData: item })
              }
            >
              <Image
                key={index}
                source={{ uri: item.image[0] }}
                style={{ width: "100%", height: "100%", borderRadius: 12 }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
        </View>
      </ScrollView>
    );
  };
  // const Video = () => {
  //   return (
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       style={{
  //         width: '100%',
  //         height: '100%',
  //       }}>
  //       <View
  //         style={{
  //           width: '100%',
  //           height: '100%',
  //           backgroundColor: 'white',
  //           flexWrap: 'wrap',
  //           flexDirection: 'row',
  //           paddingVertical: 5,
  //           justifyContent: 'space-between',
  //         }}>
  //         <FlatList
      
  //     data={userPostsData}
  //     numColumns={3}
  //     renderItem={({ item, index }) => (
  //       <View
  //         style={{
  //           flex: 1,
  //           aspectRatio: 1,
  //           margin: 3,
  //         }}
  //       >
  //         <TouchableOpacity
  //           onPress={() => navigation.navigate("OnePost", { itemData: item })}
  //         >
  //           <Image
  //             key={index}
  //             source={{ uri: item?.image }}
  //             style={{ width: "100%", height: "100%", borderRadius: 12 }}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     )}
  //   />
  //       </View>
  //     </ScrollView>
  //   );
  // };
  const Tags = ({ navigation, route }: any) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          <FlatList
      
      data={userPostsData}
      numColumns={3}
      renderItem={({ item, index }) => (
        <View
          style={{
            flex: 1,
            aspectRatio: 1,
            margin: 3,
          }}
        >
          <TouchableOpacity
           onPress={() =>
            navigation.navigate("InviteFreind", { itemData: item })
          }
          >
            <Image
              key={index}
              source={{ uri: item?.image }}
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
            />
          </TouchableOpacity>
        </View>
      )}
    />
        </View>
      </ScrollView>
    );
  };






  if (userDataLoading || userPostsLoading ) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (userDataError || userPostsError ) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: '#FC5A8D',
          height: 1.5,
        },
        tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Posts') {
              iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
              color = focused ? '#FC5A8D' : 'gray';
            } else if (route.name === 'Video') {
              iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
              color = focused ? 'black' : 'gray';
            } else if (route.name === 'Tags') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
              color = focused ? '#FC5A8D' : 'gray';
            }
          
            return iconName ? <Ionic name={iconName} color={color} size={22} /> : null;
          },
      })}>
      <Tab.Screen name="Posts" component={Posts} />
      {/* <Tab.Screen name="Video" component={Video} /> */}
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default BottomTabView;