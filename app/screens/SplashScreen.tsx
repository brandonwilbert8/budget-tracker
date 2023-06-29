import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../assets/constants';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/salary.png')}
        style={styles.logoStyle}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  logoStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
});
