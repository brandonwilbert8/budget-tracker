import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from './assets/constants';
import SplashScreen from 'react-native-splash-screen';
import StarterNavigation from './navigation/StarterNavigation';
import UserContext from './contexts/userContext';

function App(): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const userLoggedIn: boolean = true;

  return (
    <UserContext.Provider value={{isActive, setIsActive}}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
          <StatusBar barStyle={'light-content'} />
          {userLoggedIn ? <DrawerNavigation /> : <StarterNavigation />}
        </SafeAreaView>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
