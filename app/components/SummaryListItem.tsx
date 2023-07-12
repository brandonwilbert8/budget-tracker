import React from 'react';
import {StyleSheet, View} from 'react-native';
import Pill from './Pill';
import {Text} from './Text';
import {SummaryListItemProps} from '../types/typings';
import {Colors} from '../assets/constants';

const SummaryListItem = (props: SummaryListItemProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.pill}>
        <Pill category={props.category} size="sm" />
      </View>
      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.text}>${props.spent}</Text>
    </View>
  );
};

export default SummaryListItem;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomColor: Colors.light,
    borderBottomWidth: 0.5,
  },
  description: {
    flex: 0.6,
    fontSize: 18,
    fontFamily: 'NotoSans-Light',
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  pill: {
    flex: 0.4,
  },
  text: {
    flex: 0.2,
    fontSize: 18,
    fontFamily: 'NotoSans-Light',
    fontWeight: '400',
  },
});
