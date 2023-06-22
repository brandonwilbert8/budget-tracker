import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import {Button, TextInput} from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.boldFont}>Log In 🙋‍♂️</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              mode="flat"
              label={
                <Text style={{fontSize: 20, color: Colors.foreground}}>
                  Email
                </Text>
              }
              inputMode="email"
              keyboardType="email-address"
              placeholderTextColor={Colors.light}
              underlineColor={Colors.light}
              textColor={Colors.green300}
              outlineColor={Colors.light}
              right={
                <TextInput.Icon icon="email" iconColor={Colors.foreground} />
              }
              defaultValue={email}
              showSoftInputOnFocus={true}
              onChangeText={newEmail => setEmail(newEmail)}
            />
            <TextInput
              style={styles.textInput}
              inputMode="text"
              keyboardType="default"
              secureTextEntry={true}
              maxLength={10}
              placeholderTextColor={Colors.light}
              underlineColor={Colors.light}
              textColor={Colors.blue300}
              showSoftInputOnFocus={true}
              onChangeText={newPassword => setPassword(newPassword)}
              defaultValue={password}
              mode="flat"
              label={
                <Text style={{fontSize: 20, color: Colors.foreground}}>
                  Password
                </Text>
              }
              outlineColor={Colors.light}
              right={
                <TextInput.Icon icon="eye" iconColor={Colors.foreground} />
              }
            />
          </View>
        </View>
        <View style={styles.buttonStyle}>
          <Button
            icon="door-open"
            mode="contained"
            labelStyle={{fontSize: 20}}
            style={styles.buttonSize}
            buttonColor={Colors.light}
            contentStyle={{
              paddingVertical: 5,
            }}
            onPress={() => console.log('Login Pressed')}
          >
            Login
          </Button>
        </View>
        <View>
          <Text style={styles.normalFont}>
            Don't have account?{' '}
            <Text style={styles.linkFont}>Sign up here!</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  mainContent: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  boldFont: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 45,
    textAlign: 'left',
    marginLeft: 70,
    marginBottom: 35,
  },
  normalFont: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 40,
  },
  linkFont: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 15,
    color: Colors.textHighlight500,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: Colors.background,
    color: Colors.foreground,
    borderColor: Colors.foreground,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Noto Sans Light',
    width: 300,
  },
  input: {
    alignItems: 'center',
    gap: 20,
    margin: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    marginTop: 40,
  },
  buttonSize: {
    width: 150,
  },
});
