import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import {Button, TextInput} from 'react-native-paper';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={styles.scrollStyle}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        >
          <View style={styles.container}>
            <View style={styles.mainContent}>
              <Text style={styles.boldFont}>Sign Up 📝</Text>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  mode="flat"
                  label={
                    <Text style={{fontSize: 20, color: Colors.foreground}}>
                      First Name
                    </Text>
                  }
                  inputMode="text"
                  keyboardType="default"
                  placeholderTextColor={Colors.light}
                  underlineColor={Colors.light}
                  textColor={Colors.green300}
                  outlineColor={Colors.light}
                  right={
                    <TextInput.Icon
                      icon="numeric-1-circle"
                      iconColor={Colors.foreground}
                    />
                  }
                  defaultValue={firstName}
                  showSoftInputOnFocus={true}
                  onChangeText={newFirstName => setFirstName(newFirstName)}
                />
                <TextInput
                  style={styles.textInput}
                  mode="flat"
                  label={
                    <Text style={{fontSize: 20, color: Colors.foreground}}>
                      Last Name
                    </Text>
                  }
                  inputMode="text"
                  keyboardType="default"
                  placeholderTextColor={Colors.light}
                  underlineColor={Colors.light}
                  textColor={Colors.orange300}
                  outlineColor={Colors.light}
                  right={
                    <TextInput.Icon
                      icon="numeric-2-circle"
                      iconColor={Colors.foreground}
                    />
                  }
                  defaultValue={lastName}
                  showSoftInputOnFocus={true}
                  onChangeText={newLastName => setLastName(newLastName)}
                />
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
                  textColor={Colors.light}
                  outlineColor={Colors.light}
                  right={
                    <TextInput.Icon
                      icon="alphabetical-variant"
                      iconColor={Colors.foreground}
                    />
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
                icon="account-plus"
                mode="contained"
                labelStyle={{fontSize: 20}}
                style={styles.buttonSize}
                buttonColor={Colors.light}
                contentStyle={{
                  paddingVertical: 5,
                }}
                onPress={() => console.log('Login Pressed')}
              >
                Sign Up
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  keyboardAvoidingStyle: {
    flex: 1,
  },
  scrollStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  mainContent: {
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
