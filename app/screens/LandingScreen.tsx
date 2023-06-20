import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import DollarIcon from '../assets/icons/DollarIcon';

export default function LandingScreen(): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.h1}>Enter your monthly income</Text>
          <View style={styles.straightLine} />
          <View style={styles.searchSection}>
            <DollarIcon style={styles.searchIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Type your income here!"
              inputMode="numeric"
              keyboardType="numeric"
              placeholderTextColor={'#8177A0'}
              showSoftInputOnFocus={true}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2A2636',
  },
  mainContent: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
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
    backgroundColor: '#FFFFFF',
    color: '#2A2636',
    fontSize: 20,
    borderColor: '#D0D5DD',
    padding: 1,
    width: 350,
    textAlign: 'center',
  },
  straightLine: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: 380,
    marginBottom: 10,
  },
  searchIcon: {
    padding: 10,
    marginLeft: 15,
  },
  searchSection: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    marginTop: 15,
  },
});
