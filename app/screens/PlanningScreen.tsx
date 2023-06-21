import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import SavingsPlan from '../components/SavingsPlan';

const PlanningScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.h1}>Pick a plan</Text>
        <View style={styles.straightLine} />
        <View style={styles.childContent}>
          <SavingsPlan>Basic</SavingsPlan>
          <SavingsPlan>Advanced</SavingsPlan>
          <SavingsPlan>Maximiser</SavingsPlan>
        </View>
      </View>
    </View>
  );
};

export default PlanningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  h1: {
    color: Colors.foreground,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    lineHeight: 40,
  },
  straightLine: {
    borderBottomColor: Colors.foreground,
    borderBottomWidth: 1.5,
    width: 380,
    marginBottom: 10,
  },
  mainContent: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  childContent: {
    flexDirection: 'column',
    padding: 20,
    margin: 20,
    gap: 20,
  },
});
