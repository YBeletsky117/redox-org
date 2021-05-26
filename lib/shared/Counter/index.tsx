import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { getStyles } from './styles';

interface Props {
  color?: string;
  count?: number;
  size?: string;
}

export const Counter: FC<Props> = ({ color = COLORS.RED_30, count = 0, size = 'medium' }) => {
  const { styles } = getStyles();

  return (
    <View style={[styles.count, styles[size], { backgroundColor: color }]}>
      {
        size !== 'badge' ? (
          <Text style={[styles.text, styles[`text_${size}`]]}>{count}</Text>
        ) : null
      }
    </View>
  );
};