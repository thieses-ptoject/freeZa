import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../../useContext/authContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config.json";
import { NotificationContext } from "../../useContext/notificationContext";

export const NavBar = ({ navigation }: any) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState({});
  const [notification, setNotification] = useState([]);
  const [desplay, setDesplay] = useState(false);
  const {
    products,
    setFilteredProducts,
    user,
    setUser,
    setOtherView,
    setView,
  } = useContext(AuthContext);
  const { fetchNotificationsnew } = useContext(NotificationContext);

  const fetchUserData = async () => {
    try {
      const savedData = await AsyncStorage.getItem("user");
      if (savedData) {
        const userData = JSON.parse(savedData);

        const response = await axios.get(
          `http://${config.ip}:3001/user/getUser/${userData.id}`
        );
        setUserData(response.data);
        setUser(response.data);
        console.log(response.data, "mmmmmmmmmmmmmmmmmmmmmmmm");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchPress = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);

    // Filter products based on the search query
    const newFilteredProducts = products.filter((product: any) => {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // Update the state with the new filtered products
    setFilteredProducts(newFilteredProducts);

    // Reset the search query and hide the search component
    setSearchQuery("");
    setIsSearchVisible(false);
  };

  useEffect(() => {
    fetchUserData();
    setFilteredProducts(products);

    if (userData.id) {
      axios
        .get(`http://${config.ip}:3001/notificationsRate/${userData.id}`)
        .then((res) => {
          setNotification(res.data);
          setDesplay(true);
        })
        .catch((err) => {
          console.log("error fetching  data");
        });
    }
  }, [products, fetchNotificationsnew]);

  return (
    <SafeAreaView>
      <View>
        {isSearchVisible ? (
          // Render search component when isSearchVisible is true
          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={() => setIsSearchVisible(false)}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Type here to search..."
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
              autoFocus
            />
            <Pressable onPress={handleSearch}>
              <Ionicons name="search" size={24} color="#000" />
            </Pressable>
          </View>
        ) : (
          // Render the regular navbar when isSearchVisible is false
          <View>
            <StatusBar backgroundColor="#ffff" />
            <View style={styles.rectangle}>
              <View
                style={{ flexDirection: "row-reverse", alignItems: "center" }}
              >
                <Text style={styles.Freeza}>FreeZa</Text>
                <Pressable
                  onPress={() => {
                    setFilteredProducts(products);
                    setOtherView(false);
                    setView(false);
                  }}
                >
                  <View style={styles.circle}>
                    <Image
                      source={require("../../assets/freeza.png")}
                      style={styles.imageInCircle}
                    />
                  </View>
                </Pressable>
              </View>
              <View style={{ flexDirection: "row", gap: 25 }}>
                <Pressable
                  onPress={() =>
                    navigation.navigate("blog", { allinf: userData })
                  }
                >
                  <MaterialIcons name="post-add" size={30} color="#FF0000" />
                </Pressable>
                <Image
                  source={require("../../assets/strawberry.png")}
                  style={styles.strawberry}
                />
                <View style={styles.badgeContainerStraw}>
                  <Text style={styles.badgeTextStraw}>
                    {userData?.strawberries}
                  </Text>
                </View>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Notification", {
                      user: userData,
                      notification: notification,
                    });
                  }}
                >
                  <Image
                    source={require("../../assets/bell.png")}
                    style={styles.notification}
                  />
                </Pressable>

                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{notification.length}</Text>
                </View>
                <Pressable onPress={handleSearchPress}>
                  <Image
                    source={require("../../assets/search.png")}
                    style={styles.search}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
// const Badge = () => {
//   return (
//     <View style={styles.badgeContainer}>
//       <Text style={styles.badgeText}>0</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FBD0E6",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#f5dadf",
    backgroundColor: "#f5dadf",
    borderRadius: 25,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    // position: 'relative',
  },
  rectangle: {
    position: "relative",
    // flex:1,
    // top: 0,
    // left: 0,
    // width: 400,
    height: 68,
    backgroundColor: "#FBD0E6",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    width: 56,
    height: 55,
    backgroundColor: "#FBD0E6",
    borderRadius: 100,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16.0,
    elevation: 10,
  },
  imageInCircle: {
    width: "80%",
    height: "80%",
    borderRadius: 100,
  },
  Freeza: {
    color: "#78CA46",
    fontSize: 32,
    fontWeight: "700",
    paddingLeft: 5,
  },
  star: {
    width: 21,
    height: 20,
    alignSelf: "center",
    // top:20
  },
  strawberry: {
    width: 21,
    height: 35,
    alignSelf: "center",
    // top:18
  },
  search: {
    width: 21,
    height: 25,
    alignSelf: "center",
    right: 5,
  },
  notification: {
    width: 21,
    height: 30,
    alignSelf: "center",
    // top:18
  },
  badgeContainer: {
    position: "absolute",
    top: 0,
    right: 58,
    backgroundColor: "white", // Customize the badge background color
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "red", // Customize the badge text color
    fontSize: 12,
    fontWeight: "bold",
  },

  badgeContainerStraw: {
    position: "absolute",
    top: 0,
    right: 105,
    backgroundColor: "white", // Customize the badge background color
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTextStraw: {
    color: "red", // Customize the badge text color
    fontSize: 12,
    fontWeight: "bold",
  },
});
