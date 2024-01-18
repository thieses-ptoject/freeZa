import { useIsFocused } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { getallraters } from "../../React-query/user/Rating";
import { useRef } from "react";

export const RatingUser = ({ navigation, route }: any) => {
  const { rateData } = route.params;

  const layout = useWindowDimensions();
  const bottomSheet = useRef(null);
  const snapPoints = ["48"]
  const [index, setIndex] = useState(0);
  const focused = useIsFocused();
  const [routes] = useState([{ key: "first", title: "What other's think!" }]);
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const satarImagFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const satarImagCorner =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustumRating = () => (
    <View style={{ flexDirection: "row" }}>
      {maxRating.map((item, key) => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={item}
          onPress={() => setDefaultRating(item)}
        >
          <Image
            style={styles.starImgstyle}
            source={
              item <= defaultRating
                ? { uri: satarImagFilled }
                : { uri: satarImagCorner }
            }
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  const {
    data: ratersData,
    isLoading: ratersLoding,
    isError: ratersError,
    refetch: ratersRefetch,
    isSuccess: ratersIsSuccess,
    refetch: refetchRaters,
  } = getallraters(rateData.id);

  useEffect(() => {
    refetchRaters();
  }, [focused]);

  if (ratersLoding) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (ratersError) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }

   const hundelPressModel =()=>{
    
   }
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#FC5A8D",
      }}
      style={{
        backgroundColor: "#fff",
        height: 44,
      }}
      renderLabel={({ focused, route }) => (
        <Text
          style={[{ color: focused ? "#000" : "#000", fontWeight: "bold" }]}
        >
          {route.title}
        </Text>
      )}
    />
  );

  const PhotosRoutes = ({ navigation, route }: any) => (
    <View style={{ flex: 1, backgroundColor: "#FFF9FC" }}>
      {ratersIsSuccess && (
        <FlatList
          data={ratersData}
          keyExtractor={(ele) => ele.id}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view1}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("OtheruserProfile")}
                >
                  <Image
                    source={{ uri: item.rater.image }}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={styles.text1}>
                      {item.rater.firstName} {item.rater.lastName}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      {Array.from({ length: item.nbrOfStars }).map(
                        (_, index) => (
                          <Image
                            key={index}
                            source={{ uri: satarImagFilled }}
                            style={styles.starImgstyle1}
                          />
                        )
                      )}
                    </View>
                  </View>

                  <Text style={styles.text2}>{item.comments}</Text>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return <PhotosRoutes navigation={navigation} route={route} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      {/* <StatusBar backgroundColor="#FC5A8D" /> */}

      <View style={styles.view1}>
        <Image
          source={{ uri: rateData.image }}
          resizeMode="contain"
          style={{
            height: 85,
            width: 85,
            borderRadius: 999,
            borderColor: "#FC5A8D",
            borderWidth: 2,
            marginTop: 5,
            marginRight: 20,
          }}
        />

        <View>
          <Text
            style={{
              color: "#000",
              marginVertical: 8,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {" "}
            {rateData.firstName} {rateData.lastName}{" "}
          </Text>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <CustumRating />

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <Text style={{ color: "#000" }}>
                {" "}
                {rateData.nbrOfDonation}/5{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, marginHorizontal: 22, marginTop: "10%" }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>

      <View
        style={{
          top: "1%",
          height: 44,
          borderRadius: 1000,
          marginLeft: "20%",
          marginRight: "20%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FC5A8D",
        }}
      >
        <Text>Add your rate !</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: "50%",
    left: 150,
  },
  safearea: {
    flex: 1,
    backgroundColor: "#FFF8FB",
  },
  StatusBarStyle: {
    flex: 1,
  },

  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  view1: {
    flexDirection: "row",
    padding: 10,
    top: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    backgroundColor: "#FFECF6",
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 2,
  },
  starImgstyle: {
    height: 25,
    width: 25,
    resizeMode: "cover",
  },
  starImgstyle1: {
    height: 15,
    width: 15,
    resizeMode: "cover",
  },
  text1: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 20,
  },

  text2: {
    fontSize: 13,
    opacity: 0.7,
    marginRight: "20%",
  },
  text3: {
    fontSize: 17,
    opacity: 0.7,
    color: "#FC5A8D",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 70,
    marginRight: 10,
    top: "auto",
    marginBottom: "auto",
  },
  button: {
    marginBottom: "8%",
    alignItems: "center",
    top: "3%",
    marginLeft: "auto",
    borderRadius: 30,
    borderColor: "#fff",
    borderWidth: 2,
    justifyContent: "center",
    backgroundColor: "#89AD72",
  },
  tex: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: 10,
    top: "auto",
    marginBottom: "auto",
    textAlign: "justify",
  },
});
