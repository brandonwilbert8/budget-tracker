import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

export default function LandingScreen(): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.h1}>Enter your monthly income</Text>
        <View style={styles.straightLine} />
        <TextInput
          style={styles.textInput}
          placeholder="Type your income here!"
          inputMode="numeric"
          keyboardType="numeric"
          placeholderTextColor={'#8177A0'}
          showSoftInputOnFocus={true}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2A2636',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  h1: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    lineHeight: 40,
  },
  textInput: {
    height: 50,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    margin: 20,
    borderWidth: 0,
    borderColor: '#D0D5DD',
    borderRadius: 15,
    padding: 1,
    width: 350,
    textAlign: 'center',
  },
  straightLine: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: 350,
    margin: 10,
  },
});
