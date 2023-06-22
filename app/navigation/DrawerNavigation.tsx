import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SummaryScreen from '../screens/SummaryScreen';
import OverviewScreen from '../screens/OverviewScreen';
import LandingScreen from '../screens/LandingScreen';
import {Colors} from '../assets/constants';
import {MaterialIcon} from '../components/Icon';
import CustomDrawer from './CustomDrawer';
import PlanningScreen from '../screens/PlanningScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.background},
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.foreground,
        drawerActiveTintColor: Colors.textHighlight500,
        drawerActiveBackgroundColor: Colors.background,
        drawerInactiveTintColor: Colors.foreground,
        drawerStyle: {
          backgroundColor: Colors.background,
          paddingTop: 10,
          width: 230,
        },
        drawerLabelStyle: {fontSize: 18},
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcon size="large" color={color} name="airplane-landing" />
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
            <MaterialIcon size="large" color={color} name="notebook-outline" />
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
      <Drawer.Screen
        name="Pick a plan"
        component={PlanningScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcon size="large" color={color} name="notebook-multiple" />
          ),
          drawerLabel: 'Pick a plan',
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcon size="large" color={color} name="account-key" />
          ),
          drawerLabel: 'Login',
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcon size="large" color={color} name="file-replace" />
          ),
          drawerLabel: 'Sign Up',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
