import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import SummaryListItem from './SummaryListItem';
import {SummaryListItemProps} from '../types/typings';

const deviceWidth = Dimensions.get('window').width;

const dummyData: SummaryListItemProps[] = [
  {description: 'Rent', category: 'needs', spent: 1000},
  {description: 'Groceries', category: 'needs', spent: 400},
  {description: 'Headphones', category: 'wants', spent: 300},
  {description: 'Side hustle', category: 'savings', spent: 600},
  {
    description: "Let's try a max limit of 30 :)",
    category: 'savings',
    spent: 300,
  },
];

const SummaryList = () => {
  return (
    <View style={styles.container}>
      {dummyData.map((data, index) => (
        <SummaryListItem
          key={index}
          category={data.category}
          description={data.description}
          spent={data.spent}
        />
      ))}
    </View>
  );
};

export default SummaryList;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 50,
    marginTop: 10,
  },
});
