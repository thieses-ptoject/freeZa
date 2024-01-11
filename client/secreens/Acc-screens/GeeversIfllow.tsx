import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  GiversIFollowed,
  DeleteFollower,
} from "../../React-query/user/Following";
;

export const GeeversIfllow = ({ navigation }: any) => {
  const { data, isLoading, isError, refetch, isSuccess } = GiversIFollowed("3");
  const delfollower = DeleteFollower();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        <Text>Error fetching user data</Text>
      </View>
    );
  }


  const hundeldeletePress = async (Id: any) => {
    try {
      await delfollower.mutateAsync(Id);
      refetch();
    } catch (errors) {
      console.log(errors);
    }
  };


  return (
    <View style={styles.container}>
      {isSuccess && (
        <FlatList
          data={data}
          keyExtractor={(ele) => ele.id}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.navigate("OtheruserProfile", {id: item.followerId})}>
                  <Image
                    source={{ uri: item.followed.image }}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.text1}>
                    {item.followed.firstName} {item.followed.lastName}
                  </Text>
                  <Text style={styles.text2}>{item.followed.email}</Text>
                  <Text style={styles.text2}></Text>
                  <Text style={styles.text3}>{item.followed.level}</Text>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity>
                    <Text
                      style={styles.unfollowviwe}
                      onPress={() => {
                        hundeldeletePress(item.id);
                      }}
                    >
                      Unfollow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF9FC",
    flex: 1,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: 10,
    top: "auto",
    marginBottom: "auto",
  },
  view1: {
    flexDirection: "row",
    padding: 10,
    top: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    backgroundColor: "#FFECF6",
    borderRadius: 1000,
    borderColor: "#fff",
    borderWidth: 2,
  },

  text1: {
    fontSize: 17,
    fontWeight: "700",
  },

  text2: {
    fontSize: 12,
    opacity: 0.7,
  },
  text3: {
    fontSize: 17,
    opacity: 0.7,
    color: "#FC5A8D",
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

  unfollowviwe: {
    fontSize: 17,
    color: "#fff",
    marginLeft: 10,
    marginRight: 10,
    alignContent: "center",
    top: "10%",
    marginBottom: "4%",
  },
});
