import React, { FC } from 'react';
import { View } from 'react-native';

import { COLORS } from '../../constants/colors';

interface Props {
  color?: string;
}

export const Line: FC<Props> = ({ color = COLORS.NEUTRAL_40 }) => (
  <View
    style={{
      borderBottomWidth: 0.75,
      borderBottomColor: color,
      width: '100%',
    }}
  />
);