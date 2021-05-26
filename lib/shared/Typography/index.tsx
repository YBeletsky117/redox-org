import React, { FC } from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { getStyles } from './style';

interface Props {
  text: string;
  fontSize?: string;
  color?: string;
  bold?: boolean;
}

export const Typography: FC<Props> = ({ text, fontSize = 'medium', color = COLORS.NEUTRAL_00, bold }) => {
  const { styles, fs } = getStyles();
  
  return (
    <Text
      style={[
        styles.text,
        { fontSize: fs[fontSize], color },
        bold ? styles.bold : {},
      ]}
    >
      {text}
    </Text>
  );
};