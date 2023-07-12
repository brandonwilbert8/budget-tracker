import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import {MaterialIcon} from '../components/Icon';
import Pill from '../components/Pill';
import {CategoryDescriptionProps, PlanType} from '../types/typings';

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
        <Text style={styles.heading}>Category</Text>
        <Text style={styles.heading}>
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
          <Pill category="savings" size="md"></Pill>
        </View>
        <Text style={styles.text}>
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
          <Pill category="needs" size="md"></Pill>
        </View>
        <Text style={styles.text}>
          {props.isOverview ? `$${planDetails.needs}` : `$${spentNeeds}`}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.pill}>
          <View style={styles.icon}>
            <MaterialIcon name="cart" size="large" color={Colors.foreground} />
          </View>
          <Pill category="wants" size="md"></Pill>
        </View>
        <Text style={styles.text}>
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
  },
  heading: {
    fontSize: deviceWidth / 18,
    flex: 0.5,
    textAlign: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    width: deviceWidth - 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderBottomColor: Colors.light,
    borderBottomWidth: 0.5,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.5,
  },
  text: {
    flex: 0.5,
    fontSize: deviceWidth / 18,
    fontFamily: 'NotoSans-Light',
    textAlign: 'center',
  },
  icon: {
    paddingRight: 10,
  },
});
