import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import straw from '../assets/freeza.png';
import { useNavigation } from '@react-navigation/native';

export const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffff" />
      <View style={styles.rectangle} >
      <View style={styles.circle}>
        <Image    source={straw} style={styles.imageInCircle} />
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    // position: 'relative',


  },
  rectangle: {
    position: 'relative',
    // flex:1,
    // top: 0,
    // left: 0,
    // width: 400,
    height: 68,
    backgroundColor: '#FFECF6',
    alignItems:'center',
    justifyContent:'center'
  },
  circle: {
    width: 56,
    height: 55,
    backgroundColor: '#FFECF6',
    borderRadius: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  imageInCircle: {
    width: '80%',
    height: '80%', 
    borderRadius: 100,


  },
});

