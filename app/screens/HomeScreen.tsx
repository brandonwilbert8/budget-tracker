import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../components/Text';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text style={styles.boldFont}>Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2636',
  },
  boldFont: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 40,
  },
});
