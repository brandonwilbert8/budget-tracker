import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import OverviewScreen from './screens/OverviewScreen';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Summary" component={SummaryScreen} />
        <Drawer.Screen name="Overview" component={OverviewScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
