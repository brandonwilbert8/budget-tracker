import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/constants';
import Donut from '../components/donut/Donut';
import {Text} from '../components/Text';
import Pill from '../components/Pill';
import {MaterialIcon} from '../components/Icon';

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
  const needs = donut.monthlyIncome * 0.5;
  const wants = donut.monthlyIncome * 0.3 + donut.monthlyIncome * 0.2;
  const wantsDividend = donut.monthlyIncome * 0.3;
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
          <Text style={{fontSize: deviceWidth / 20}}>Spending</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.pill}>
            <View style={styles.icon}>
              <MaterialIcon
                name="cash-multiple"
                size="large"
                color={Colors.foreground}
              />
            </View>
            <Pill color={Colors.blue300}>Savings</Pill>
          </View>
          <Text style={{fontSize: deviceWidth / 14, textAlign: 'left'}}>
            ${savings}
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.pill}>
            <View style={styles.icon}>
              <MaterialIcon
                name="account-supervisor-circle"
                size="large"
                color={Colors.foreground}
              />
            </View>
            <Pill color={Colors.orange300}>Needs</Pill>
          </View>
          <Text style={{fontSize: deviceWidth / 14, textAlign: 'left'}}>
            ${needs}
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.pill}>
            <View style={styles.icon}>
              <MaterialIcon
                name="cart"
                size="large"
                color={Colors.foreground}
              />
            </View>
            <Pill color={Colors.green300}>Wants</Pill>
          </View>
          <Text style={{fontSize: deviceWidth / 14, textAlign: 'left'}}>
            ${wantsDividend}
          </Text>
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
