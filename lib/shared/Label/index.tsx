import React, { FC } from 'react';
import { Text } from 'react-native';
import { getStyles } from './style';
import { COLORS } from '../../constants/colors';

interface Props {
  title?: string;
  color?: string;
  required?: boolean;
  isAfter?: boolean;
}

export const Label: FC<Props> = ({
  title,
  color = COLORS.GRAY,
  required = false,
  isAfter = false,
}) => {
  const styles = getStyles();

  return (
    <Text style={[styles.title, { color }]}>
      {
        !isAfter && required ? (
          <Text style={styles.asterisk}>* </Text>
        ) : null
      }

      {title}

      {
        isAfter && required ? (
          <Text style={styles.asterisk}> *</Text>
         ) : null
      }
    </Text>
  );
};