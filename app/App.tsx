import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import OverviewScreen from './screens/OverviewScreen';
import LandingScreen from './screens/LandingScreen';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#2a2636',
            padding: 20,
            width: 240,
            borderColor: '#2a2636',
          },
          headerStyle: {backgroundColor: '#2a2636'},
          headerTitle: '',
          drawerActiveTintColor: '#e0a400',
          drawerInactiveTintColor: '#fff',
        }}
      >
        <Drawer.Screen
          name="Landing"
          component={LandingScreen}
          options={{drawerLabel: 'Landing'}}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name="Summary"
          component={SummaryScreen}
          options={{drawerLabel: 'Summary'}}
        />
        <Drawer.Screen
          name="Overview"
          component={OverviewScreen}
          options={{drawerLabel: 'Overview'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
