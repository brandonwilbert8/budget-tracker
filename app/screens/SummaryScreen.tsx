import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../assets/constants';
import {Text} from '../components/Text';
import CategoryDescription from '../components/CategoryDescription';
import {ScrollView} from 'react-native';
import SummaryList from '../components/SummaryList';

const deviceWidth = Dimensions.get('window').width;

const SummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.row}>
        <Text style={styles.headings}>Category</Text>
        <Text style={[styles.headings, {flex: 0.7}]}>Description</Text>
        <Text style={styles.headings}>Spent</Text>
      </View>
      <ScrollView>
        <SummaryList />
      </ScrollView>
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 30,
    fontFamily: 'NotoSans-Regular',
    padding: 10,
  },
  headings: {
    fontSize: 20,
    fontFamily: 'NotoSans-Regular',
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: deviceWidth - 50,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.foreground,
  },
});
