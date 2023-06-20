import React from 'react';
import {
  Text as ReactText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';

type TextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

export const Text = ({style, children}: TextProps) => {
  return <ReactText style={[styles.font, style]}>{children}</ReactText>;
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'NotoSans-Light',
    color: '#fff',
    fontSize: 14,
  },
});
