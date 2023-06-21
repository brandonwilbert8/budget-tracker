import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
