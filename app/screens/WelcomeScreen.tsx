import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import {Button} from 'react-native-paper';

export default function WelcomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.h1}>Welcome</Text>
        <Text style={styles.h2}>Let's save money together</Text>
        <View style={styles.buttonStyle}>
          <Button
            icon="account-plus"
            mode="contained"
            labelStyle={{fontSize: 20}}
            style={styles.buttonSize}
            buttonColor={Colors.green300}
            contentStyle={{
              paddingVertical: 5,
            }}
            onPress={() => console.log('Sign Up Pressed')}
          >
            Sign Up
          </Button>
          <Button
            icon="door-open"
            mode="contained"
            labelStyle={{fontSize: 20}}
            style={styles.buttonSize}
            buttonColor={Colors.blue300}
            contentStyle={{
              paddingVertical: 5,
            }}
            onPress={() => console.log('Login Pressed')}
          >
            Login
          </Button>
        </View>
      </View>
    </View>
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
    marginBottom: 20,
  },
  h1: {
    color: Colors.foreground,
    fontFamily: 'NotoSans-Bold',
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    lineHeight: 50,
  },
  h2: {
    color: Colors.foreground,
    fontSize: 30,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
    fontWeight: '300',
    padding: 15,
    lineHeight: 15,
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
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  buttonSize: {
    width: 150,
  },
});
