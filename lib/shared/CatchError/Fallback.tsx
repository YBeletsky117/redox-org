import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getStyles } from './style';

interface Props {
  resetError: () => void;
}

export const Fallback: FC<Props> = ({ resetError }) => {
  const styles = getStyles();

  return (
    <View style={styles.error}>
      <Text style={styles.text}>Что-то пошло не так</Text>

      <TouchableOpacity onPress={resetError}>
        <Text style={styles.try}>Закрыть</Text>
      </TouchableOpacity>
    </View>
  );
};