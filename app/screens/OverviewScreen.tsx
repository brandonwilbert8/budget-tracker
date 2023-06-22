import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/constants';
import Donut from '../components/donut/Donut';
import {Text} from '../components/Text';
import Pill from '../components/Pill';

const deviceWidth = Dimensions.get('window').width;

const donut = {
  monthlyIncome: 4000,
  radius: deviceWidth * 0.48,
  strokeWidth: 50,
  duration: 1000,
  color: '#fff',
  delay: 0,
};

const OverviewScreen = () => {
  const wants = donut.monthlyIncome * 0.3 + donut.monthlyIncome * 0.2;
  const savings = donut.monthlyIncome * 0.2;

  return (
    <View style={styles.container}>
      <View style={styles.graphContent}>
        <Donut
          monthlyIncome={donut.monthlyIncome}
          wants={wants}
          savings={savings}
          radius={donut.radius}
          strokeWidth={donut.strokeWidth}
          duration={donut.duration}
          color={donut.color}
          delay={donut.delay}
        />
      </View>
      <View style={styles.infoDesc}>
        <View style={styles.headerDesc}>
          <Text style={{fontSize: deviceWidth / 20}}>Category</Text>
          <Text style={{fontSize: deviceWidth / 20}}>Allocated Spending</Text>
        </View>
        <View>
          <Pill />
        </View>
      </View>
    </View>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  infoDesc: {
    flex: 1,
    width: deviceWidth - 50,
  },
  headerDesc: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: Colors.foreground,
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  boldFont: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 40,
  },
  graphContent: {
    flex: 1,
    marginTop: 100,
  },
});
