import React, {  useRef, useState } from "react";
import { RefObject} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import {
  addfavDeletFav,
  GetFav,
} from "../../React-query/ProductDetails/Details";
import { getUserData } from "./../../localStorage/getuser";
import {getOneUserData} from "./../../React-query/user/profileUser"

const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 55;
const MAX_HEIGHT = 350;

export const ItemsDetails = ({ navigation, route }: any) => {
  const { itemData } = route.params;
  const [userConnected, setUserConncted] = useState<string>("");
  const { data, refetch, isSuccess } = GetFav(userConnected, itemData.id);

  getUserData().then((result: any) => {
    setUserConncted(result.id);
    refetch();
  });



  const {
    data: OwnerData,
    isLoading: OwnerLoading,
    isError: OwnerError,
  } = getOneUserData(itemData.ownerId);
  

 









  const addRemovFav = addfavDeletFav();
  const hundeldeletePress = async () => {
    try {
      const fav = await addRemovFav.mutateAsync({
        itemId: itemData.id,
        userId: userConnected,
      });
      refetch();
    } catch (errors) {
      console.log(errors);
    }
  };
  const RenderItem = () => {
    const strawberryImages = [];
    for (let i = 0; i < itemData?.strawberries; i++) {
      strawberryImages.push(
        <Image
          key={i}
          style={styles.freezaIcon}
          resizeMode="cover"
          source={require("../../assets/account/freza.png")}
        />
      );
    }
    return strawberryImages;
  };
  const navTitleView: RefObject<any> = useRef(null);




  if (OwnerLoading ) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (OwnerError) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }






  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        overlayColor="rgba(0, 0, 0, 0.6)"
        renderHeader={() => (
          <View>
            <Image source={{ uri: itemData.image[0] }} style={styles.image} />
          </View>
        )}
        foregroundExtrapolate="clamp"
      >
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current?.fadeInUp(200)}
          onDisplay={() => navTitleView.current?.fadeOut(100)}
          onBeginHidden={() => {}}
          onBeginDisplayed={() => {}}
          onTouchTop={() => {}}
          onTouchBottom={() => {}}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Overview</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  onPress={() => {
                    hundeldeletePress();
                  }}
                >
                  {isSuccess && data.length > 0 ? (
                    <Ionicons name={"heart"} size={30} color={"red"} />
                  ) : (
                    <Ionicons name={"heart-outline"} size={30} color={"red"} />
                  )}
                </Pressable>
              </View>
            </View>
          </View>
        </TriggeringView>

        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: OwnerData?.image }}
            style={{
              height: "80%",
              width: "13%",
              borderRadius: 10000,
              borderColor: "#FC5A8D",
              borderWidth: 1,
              marginTop: "3%",
              marginRight: "3%",
              objectFit: "cover",
              padding: "5%",
              marginLeft: "2%",
            }}
          />
          <Text
            style={{
              fontSize: 16,
              color: "#000",
              marginTop: "8%",
              fontWeight:"bold"
            }}
          >
            {OwnerData?.firstName} {OwnerData?.lastName}
            {"\n"}
          </Text>
            <TouchableOpacity
              style={{
                width: 124,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8FD166",
                borderRadius: 10,
                marginTop: "5%",
                marginLeft: "auto", 
              }}
              onPress={() => navigation.navigate("Chatscreen" , {currentUser: userConnected , user:OwnerData})}
            >
              <Text style={{ color: "#fff" }}> reserve it now! </Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.section, styles.sectionLarge]}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name={"star-sharp"}
              size={15}
              style={{ flexDirection: "row", top: "15%", color: "#2C5712" }}
            />
            <Text style={styles.sectionContent1}>
              {itemData?.name}
              {"\n"}
            </Text>
            <View
              style={{ flexDirection: "row", marginLeft: "auto", top: "13%" }}
            >
              <RenderItem />
            </View>
          </View>

          <Text style={styles.sectionContent}>
            Description: {itemData?.description}
          </Text>
          <Text style={styles.sectionContent2}>
            {moment(itemData?.createdAt).format("MMM Do YY")}
          </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.categories}>
            <View style={styles.categoryContainer} key={itemData?.id}>
              <FontAwesome name="tag" size={16} color="#fff" />
              <Text style={styles.category}>{itemData?.state}</Text>
            </View>

            <View style={styles.categoryContainer} key={itemData?.id}>
              <FontAwesome name="tag" size={16} color="#fff" />
              <Text style={styles.category}>{itemData?.type}</Text>
            </View>
            {itemData?.exclusive === true && (
              <View style={styles.categoryContainer} key={itemData?.id}>
                <FontAwesome name="tag" size={16} color="#fff" />
                <Text style={styles.category}>Exclusive</Text>
              </View>
            )}
          </View>
        </View>

        <View style={[styles.section, { height: 250 }]}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            region={{
              latitude: itemData.location.latitude || 0,
              longitude: itemData.location.longitude || 0,
              latitudeDelta: 0.00864195044303443,
              longitudeDelta: 0.000142817690068,
            }}
          >
            <Marker
              coordinate={{
                latitude: itemData.location?.latitude || 0,
                longitude: itemData.location?.longitude || 0,
              }}
              image={require("client/assets/freeza.png")}
            />
          </MapView>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    color: "#2C5712",
  },
  name: {
    fontWeight: "bold",
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify",
  },
  sectionContent1: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    color: "#FC5A8D",
    marginVertical: 10,
    textTransform: "capitalize",
    marginLeft: 10,
  },
  sectionContent2: {
    top: "20%",
    fontSize: 20,
    textAlign: "left",
    color: "#000",
    marginVertical: 10,
    textTransform: "capitalize",
    marginLeft: "auto",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#FC5A8D",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "transparent",
  },
  sectionLarge: {
    minHeight: 300,
  },
  freezaIcon: {
    top: "-2%",
    left: 0,
    width: 25,
    height: 29,
    marginLeft: "auto",
  },
});
