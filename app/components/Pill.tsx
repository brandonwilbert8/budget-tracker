import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {Text} from './Text';

type PillProps = {
  color: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Pill = ({style, color, children}: PillProps) => {
  return (
    <View style={[styles.container, {backgroundColor: color}, style]}>
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: 'NotoSans-Light',
            fontSize: 20,
            fontWeight: '400',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}
        >
          {children}
        </Text>
      </View>
    </View>
  );
};

export default Pill;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: 130,
    borderRadius: 50,
  },
  content: {
    padding: 10,
  },
});
