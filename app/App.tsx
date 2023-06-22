import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from './assets/constants';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
        <StatusBar barStyle={'light-content'} />
        <DrawerNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
