import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import Donut from '../components/donut/Donut';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graphContent}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  boldFont: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 40,
  },
  graphContent: {
    flex: 1,
    marginTop: 100,
  },
});
