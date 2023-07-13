import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet, View, Dimensions, Keyboard} from 'react-native';
import {Text} from '../components/Text';
import {Colors} from '../assets/constants';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  TouchableWithoutFeedback,
} from '@gorhom/bottom-sheet';
import {Button} from 'react-native-paper';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {SelectList} from 'react-native-dropdown-select-list';
import {CategoryDropdown} from '../types/typings';

const deviceWidth = Dimensions.get('window').width;

const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');

  // Modal
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // Backdrop when modal is active
  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps
    ) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-10}
        appearsOnIndex={2}
      />
    ),
    []
  );

  const dummyData: CategoryDropdown[] = [
    {key: '1', value: 'Wants'},
    {key: '2', value: 'Needs'},
    {key: '3', value: 'Savings'},
  ];

  return (
    <BottomSheetModalProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Button icon="plus" mode="elevated" onPress={handlePresentModalPress}>
            Add an expense
          </Button>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
              backgroundColor: Colors.background,
            }}
            handleIndicatorStyle={{backgroundColor: Colors.foreground}}
          >
            <View style={styles.modalView}>
              <View style={styles.underline}>
                <Text style={styles.modalHeader}>Add an expense</Text>
              </View>

              <View
                style={[
                  styles.row,
                  {paddingHorizontal: 20, paddingVertical: 10},
                ]}
              >
                <View>
                  <Text style={[styles.subTitle]}>Category</Text>
                  <SelectList
                    search={false}
                    setSelected={(val: any) => {
                      setCategory(val);
                    }}
                    data={dummyData}
                    save="value"
                    boxStyles={{
                      width: deviceWidth / 2,
                      backgroundColor: Colors.foreground,
                    }}
                    // dropdownItemStyles={{backgroundColor: Colors.foreground}}
                    dropdownStyles={{backgroundColor: Colors.foreground}}
                  />
                </View>

                <View>
                  <Text style={[styles.subTitle]}>Cost</Text>
                  <BottomSheetTextInput
                    style={styles.textInput}
                    autoCapitalize="sentences"
                    autoCorrect={false}
                    defaultValue={description}
                    onChangeText={newDescription =>
                      setDescription(newDescription)
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  padding: 20,
                }}
              >
                <Text style={[styles.subTitle]}>Description</Text>
                <BottomSheetTextInput
                  style={styles.descriptionInput}
                  autoCapitalize="sentences"
                  autoCorrect={false}
                  defaultValue={description}
                  onChangeText={newDescription =>
                    setDescription(newDescription)
                  }
                />
              </View>
            </View>
          </BottomSheetModal>
        </View>
      </TouchableWithoutFeedback>
    </BottomSheetModalProvider>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  modalView: {
    alignItems: 'center',
  },
  modalHeader: {
    textAlign: 'center',
    fontSize: deviceWidth / 18,
    padding: 10,
  },
  underline: {
    width: deviceWidth / 1.2,
    margin: 5,
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
  textInput: {
    width: deviceWidth / 3,
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.foreground,
    color: Colors.background,
    textAlign: 'center',
  },
  descriptionInput: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.foreground,
    color: Colors.background,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
