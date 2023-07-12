import React from 'react';
import {
  Text as ReactText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {Colors} from '../assets/constants';

type TextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

export const Text = ({style, children}: TextProps) => {
  return <ReactText style={[styles.font, style]}>{children}</ReactText>;
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'NotoSans-Regular',
    color: Colors.foreground,
    fontSize: 14,
  },
});
