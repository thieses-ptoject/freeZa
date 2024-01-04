import React from 'react'
import { View ,Text, StyleSheet} from 'react-native'
import Svg, { Path } from 'react-native-svg';

export const Welcome = () => {
  return (
        <View >
      <Svg style={styles.up} width={241} height={172} viewBox="0 0 241 172" fill="none">
      <Path
        d="M162.205 115.865C129.183 245.198 -32.9372 119.774 -55.0377 23.6511C-77.1381 -72.4717 -48.2777 -159.066 37.1762 -193.591C122.63 -228.117 192.435 -170.806 230.129 -95.4164C267.824 -20.0273 195.226 -13.4676 162.205 115.865Z"
        fill="#F20B32"
      />
    </Svg>
    <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="233" viewBox="0 0 80 233" fill="none">
<Path d="M122.23 -10.027C179.747 -88.2618 243.628 44.3248 243.628 111.371C243.628 178.418 189.276 232.77 122.23 232.77C55.1834 232.77 -8.01705 181.723 0.831575 111.371C9.6802 41.0195 64.7126 68.2077 122.23 -10.027Z" fill="#78CA46"/>
</Svg>
      

    </View>
  )
}
const styles = StyleSheet.create({

    up : {
      width: 311.014,
      height: 367.298,
      transform: [{ rotate: '0deg' }],
      flexShrink: 0,
    }
  });
