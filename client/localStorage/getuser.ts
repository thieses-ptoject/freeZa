import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserData = async () => {
  try {
    const savedData = await AsyncStorage.getItem('user');
    
    if (savedData) {
      var  data = JSON.parse(savedData);
      console.log(data,  "data data ========================= ");
      return data  
    } else {
      console.log('No user data found');
      return null
    }
  } catch (error) {
    console.error('Error retrieving user data:', error);
      return null
    }

   };