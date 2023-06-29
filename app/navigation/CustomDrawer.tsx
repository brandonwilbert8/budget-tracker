import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Colors} from '../assets/constants';
import {MaterialIcon} from '../components/Icon';
import {Text} from '../components/Text';

const Drawer = createDrawerNavigator();

function signOut() {
  console.log('Signed out');
}

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <View style={styles.userContainer}>
          <View>
            <Text>John Doe</Text>
            <Text>johndoe@example.com</Text>
          </View>
          <View style={styles.avatar}>
            <MaterialIcon
              size="extraLarge"
              name="account"
              color={Colors.foreground}
            />
          </View>
        </View>
        <DrawerItemList {...props} />
      </View>
      <TouchableOpacity style={styles.logoutDrawer}>
        <DrawerItem
          label="Sign Out"
          onPress={signOut}
          icon={() => (
            <MaterialIcon
              size="extraLarge"
              color={Colors.foreground}
              name="exit-to-app"
            />
          )}
          labelStyle={styles.signOutText}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
    marginBottom: 10,
    paddingVertical: 10,
    width: 220,
    borderBottomColor: Colors.foreground,
    borderBottomWidth: 1,
  },
  avatar: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.foreground,
  },
  logoutDrawer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 50,
    backgroundColor: Colors.background,
    padding: 10,
  },
  signOutText: {
    color: Colors.foreground,
    fontSize: 18,
  },
  singOutTextActive: {color: Colors.textHighlight500},
});
