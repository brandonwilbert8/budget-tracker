import {StyleSheet, View, StyleProp, ViewStyle, Dimensions} from 'react-native';
import React from 'react';
import {Text} from './Text';
import {Colors} from '../assets/constants';

type PillProps = {
  style?: StyleProp<ViewStyle>;
  size: 'xsm' | 'sm' | 'md' | 'lg';
  category: 'savings' | 'wants' | 'needs';
};

const deviceWidth = Dimensions.get('window').width;

const Pill = ({style, category, size}: PillProps) => {
  return (
    <View
      style={[
        size === 'lg'
          ? styles.lgContainer
          : size === 'sm'
          ? styles.smContainer
          : size === 'xsm'
          ? styles.xsmContainer
          : styles.mdContainer,
        {
          backgroundColor:
            category === 'needs'
              ? Colors.orange300
              : category === 'savings'
              ? Colors.blue300
              : Colors.green300,
        },
        style,
      ]}
    >
      <View style={styles.content}>
        <Text
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize:
              size === 'lg'
                ? deviceWidth / 20
                : size === 'sm'
                ? deviceWidth / 30
                : size === 'xsm'
                ? deviceWidth / 40
                : deviceWidth / 27,
          }}
        >
          {category === 'savings'
            ? 'Savings'
            : category === 'needs'
            ? 'Needs'
            : 'Wants'}
        </Text>
      </View>
    </View>
  );
};

export default Pill;

const styles = StyleSheet.create({
  lgContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: deviceWidth / 3,
    borderRadius: 50,
  },
  mdContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: deviceWidth / 3.5,
    aspectRatio: 3,
    borderRadius: 50,
  },
  smContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: deviceWidth / 4,
    aspectRatio: 3,
    borderRadius: 50,
  },
  xsmContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: deviceWidth / 5,
    aspectRatio: 3,
    borderRadius: 50,
  },
  content: {
    padding: 5,
  },
});
