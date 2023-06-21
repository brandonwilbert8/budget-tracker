import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/constants';
import {Text} from '../components/Text';

type SavingsPlanProps = {
  children: React.ReactNode;
};

function returnNeeds(children: React.ReactNode) {
  switch (children) {
    case 'Basic':
      return '50%';
    case 'Advanced':
      return '40%';
    case 'Maximiser':
      return '40%';
    default:
      break;
  }
}

function returnWants(children: React.ReactNode) {
  switch (children) {
    case 'Basic':
      return '30%';
    case 'Advanced':
      return '30%';
    case 'Maximiser':
      return '20%';
    default:
      break;
  }
}

function returnSavings(children: React.ReactNode) {
  switch (children) {
    case 'Basic':
      return '20%';
    case 'Advanced':
      return '30%';
    case 'Maximiser':
      return '40%';
    default:
      break;
  }
}

const SavingsPlan = ({children}: SavingsPlanProps) => {
  return (
    <View style={styles.mainBox}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.center}>
        <View style={styles.straightLine} />
      </View>
      <View>
        <Text style={styles.textContent}>
          {returnNeeds(children)} of income is for{' '}
          <Text style={{color: Colors.orange300}}>Needs</Text>
        </Text>
        <Text style={styles.textContent}>
          {returnWants(children)} of income is for{' '}
          <Text style={{color: Colors.blue300}}>Wants</Text>
        </Text>
        <Text style={styles.textContent}>
          {returnSavings(children)} of income is for{' '}
          <Text style={{color: Colors.green300}}>Savings</Text>
        </Text>
      </View>
    </View>
  );
};

export default SavingsPlan;

const styles = StyleSheet.create({
  title: {
    color: Colors.background,
    fontSize: 25,
    textAlign: 'left',
    fontWeight: 'normal',
    padding: 2,
    lineHeight: 30,
  },
  straightLine: {
    borderBottomColor: Colors.background,
    borderBottomWidth: 1,
    width: 280,
    marginBottom: 10,
  },
  center: {
    alignItems: 'center',
  },
  mainBox: {
    backgroundColor: Colors.foreground,
    borderRadius: 15,
    padding: 10,
    width: 310,
  },
  textContent: {
    padding: 2,
    fontSize: 17,
    color: Colors.background,
  },
});
