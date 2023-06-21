import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import OverviewScreen from './screens/OverviewScreen';
import LandingScreen from './screens/LandingScreen';
import {StatusBar} from 'react-native';
import {Colors} from './assets/constants';
import {MaterialIcon} from './components/Icon';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Colors.background},
          headerTransparent: true,
          headerTitle: '',
          drawerActiveTintColor: Colors.textHighlight500,
          drawerActiveBackgroundColor: Colors.background,
          drawerInactiveTintColor: Colors.foreground,
          drawerStyle: {
            backgroundColor: Colors.background,
            paddingTop: 10,
            width: 230,
          },
        }}
      >
        <Drawer.Screen
          name="Landing"
          component={LandingScreen}
          options={{
            drawerIcon: ({color}) => (
              <MaterialIcon
                size="large"
                color={color}
                name="airplane-landing"
              />
            ),
            drawerLabel: 'Landing',
          }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({color}) => (
              <MaterialIcon size="large" color={color} name="home" />
            ),
            drawerLabel: 'Home',
          }}
        />
        <Drawer.Screen
          name="Summary"
          component={SummaryScreen}
          options={{
            drawerIcon: ({color}) => (
              <MaterialIcon
                size="large"
                color={color}
                name="notebook-outline"
              />
            ),
            drawerLabel: 'Summary',
          }}
        />
        <Drawer.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            drawerIcon: ({color}) => (
              <MaterialIcon size="large" color={color} name="eye" />
            ),
            drawerLabel: 'Overview',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
