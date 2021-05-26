import React, { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
  direction?: string;
}

export const ArrowSVG: FC<Props> = ({
  color = 'white',
  size = 16,
  direction = 'right',
}) => (
  <View
    style={{
      transform: [{
        rotate: {
          top: '-90deg',
          bottom: '90deg',
          left: '180deg',
          right: '0deg',
        }[direction]
      }]}
    }
  >
    <Svg width={`${size}`} height={`${size}`} viewBox="0 0 16 16" fill="none">
      <Path d="M5.00333 2L11 8.018L5 14" stroke={`${color}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  </View>
);