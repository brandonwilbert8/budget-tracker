import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import {MaterialIcon} from '../components/Icon';
import NextButton from '../components/NextButton';

export default function LandingScreen(): JSX.Element {
  const [text, setText] = useState('');

  const buttonHandler = (): void => {
    if (text.length <= 0) {
      console.log('EMPTY');
    } else console.log(text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.h1}>Enter your monthly income</Text>
          <View style={styles.straightLine} />
          <View style={styles.searchSection}>
            <MaterialIcon
              size="large"
              color={Colors.background}
              name="currency-usd"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Type your income here!"
              inputMode="numeric"
              keyboardType="numeric"
              maxLength={6}
              placeholderTextColor={'#8177A0'}
              showSoftInputOnFocus={true}
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />
          </View>
        </View>
        <View style={styles.buttonStyle}>
          <NextButton onPress={buttonHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  mainContent: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  h1: {
    color: Colors.foreground,
    fontSize: 37,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    lineHeight: 50,
  },
  textInput: {
    backgroundColor: Colors.foreground,
    color: Colors.background,
    fontSize: 23,
    borderColor: Colors.foreground,
    width: 300,
    marginRight: 80,
    textAlign: 'center',
    fontFamily: 'Noto Sans Light',
  },
  straightLine: {
    borderBottomColor: Colors.foreground,
    borderBottomWidth: 1.5,
    width: 380,
    marginBottom: 10,
  },
  searchSection: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: Colors.foreground,
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 15,
  },
  buttonStyle: {
    alignItems: 'center',
  },
});
