import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/constants';
import OverviewDonut from '../components/donut/OverviewDonut';
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

const OverviewScreen = () => {
  const needs = donut.monthlyIncome * 0.5;
  const wants = donut.monthlyIncome * 0.3 + donut.monthlyIncome * 0.2;
  const wantsDividend = donut.monthlyIncome * 0.3;
  const savings = donut.monthlyIncome * 0.2;

  return (
    <View style={styles.container}>
      <View style={styles.graphContent}>
        <OverviewDonut
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
      <CategoryDescription planType={planType} isOverview={true} />
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
    justifyContent: 'space-between',
    borderBottomColor: Colors.foreground,
    borderBottomWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginBottom: 10,
  },
  boldFont: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 40,
  },
  graphContent: {
    flex: 1,
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 10,
  },
});
