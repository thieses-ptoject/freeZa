import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

interface CrossIconProps {
  width?: number;
  height?: number;
}

const CrossIcon: React.FC<CrossIconProps> = ({ width = 28, height = 28 }) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
        <Rect x="1" y="1" width="26" height="26" rx="7" fill="#FE0000" stroke="#78CA46" strokeWidth={2} />
        <Path d="M19.5 19.5L8.5 8.50714" stroke="white" strokeWidth={2} strokeLinecap="round" />
        <Path d="M19.5 8.5L8.5 19.5071" stroke="white" strokeWidth={2} strokeLinecap="round" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        left:20
      },
});

export default CrossIcon;