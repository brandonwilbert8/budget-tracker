import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import HomeDonut from '../components/donut/HomeDonut';
import {MaterialIcon} from '../components/Icon';
import Pill from '../components/Pill';
import CategoryDescription from '../components/CategoryDescription';
import {PlanType} from '../types/typings';

const deviceWidth = Dimensions.get('window').width;

const donut = {
  monthlyIncome: 4000,
  radius: deviceWidth * 0.48,
  strokeWidth: 50,
  duration: 1000,
  color: '#fff',
  delay: 0,
};
const monthlyIncome: number = 4000;
const planType: PlanType = {
  wants: monthlyIncome * 0.3,
  needs: monthlyIncome * 0.5,
  savings: monthlyIncome * 0.2,
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldFont}>May 2023</Text>
      <View style={styles.graphContent}>
        <HomeDonut
          monthlyIncome={donut.monthlyIncome}
          wants={planType.wants}
          savings={planType.savings}
          radius={donut.radius}
          strokeWidth={donut.strokeWidth}
          duration={donut.duration}
          color={donut.color}
          delay={donut.delay}
        />
        <Text style={styles.remainingBalance}>Remaining Balance: $3200</Text>
      </View>
      <CategoryDescription planType={planType} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  boldFont: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 30,
  },
  graphContent: {
    flex: 1,
    marginTop: 10,
  },
  remainingBalance: {
    position: 'relative',
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
});
