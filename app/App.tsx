import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from './assets/constants';
import SplashScreen from 'react-native-splash-screen';
import StarterNavigation from './navigation/StarterNavigation';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const userLoggedIn: boolean = false;

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
        <StatusBar barStyle={'light-content'} />
        {userLoggedIn ? <DrawerNavigation /> : <StarterNavigation />}
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
