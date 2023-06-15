/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import LandingScreen from './screens/LandingScreen';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <LandingScreen />
    </>
  );
}

export default App;
