import {StyleSheet, View, Dimensions} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import HomeDonut from '../components/donut/HomeDonut';
import {MaterialIcon} from '../components/Icon';
import Pill from '../components/Pill';
import React, {useEffect, useState} from 'react';
import {PlanType} from '../types/typings';

type CategoryDescriptionProps = {
  planType: PlanType;
  isOverview?: boolean;
};

const deviceWidth = Dimensions.get('window').width;

const CategoryDescription = (props: CategoryDescriptionProps) => {
  const [planDetails, setPlanDetails] = useState<PlanType>(props.planType);

  const [spentWants, setSpentWants] = useState<number>(900);
  const [spentNeeds, setSpentNeeds] = useState<number>(1000);
  const [spentSavings, setSpentSavings] = useState<number>(700);

  const [remainingBal, setRemainingBal] = useState<number>();
  const [total, setTotal] = useState<number>(
    planDetails.needs + planDetails.savings + planDetails.wants
  );

  console.log(remainingBal);

  useEffect(() => {
    setRemainingBal(total - 100);
  }, [props.planType]);

  return (
    <View style={styles.infoDesc}>
      <View style={styles.headerDesc}>
        <Text style={{fontSize: deviceWidth / 18}}>Category</Text>
        <Text style={{fontSize: deviceWidth / 18}}>
          {props.isOverview ? 'Allocation' : 'Spent'}
        </Text>
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
        <Text style={{fontSize: deviceWidth / 14, marginRight: 50}}>
          {props.isOverview ? `$${planDetails.savings}` : `$${spentSavings}`}
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
        <Text style={{fontSize: deviceWidth / 14, marginRight: 50}}>
          {props.isOverview ? `$${planDetails.needs}` : `$${spentNeeds}`}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.pill}>
          <View style={styles.icon}>
            <MaterialIcon name="cart" size="large" color={Colors.foreground} />
          </View>
          <Pill color={Colors.green300}>Wants</Pill>
        </View>
        <Text style={{fontSize: deviceWidth / 14, marginRight: 50}}>
          {props.isOverview ? `$${planDetails.wants}` : `$${spentWants}`}
        </Text>
      </View>
    </View>
  );
};

export default CategoryDescription;

const styles = StyleSheet.create({
  infoDesc: {
    flex: 1,
    width: deviceWidth - 50,
    marginTop: 90,
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
    marginRight: 100,
  },
  icon: {
    paddingRight: 10,
  },
});
