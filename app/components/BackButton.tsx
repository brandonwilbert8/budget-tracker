import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MaterialIcon} from './Icon';

interface BackButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  buttonName: string;
}

const BackButton = ({onPress, buttonName}: BackButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>
        <MaterialIcon
          size="extraLarge"
          color={Colors.background}
          name={buttonName}
        />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BackButton;
