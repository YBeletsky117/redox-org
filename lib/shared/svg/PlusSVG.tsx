import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const PlusSVG: FC<Props> = ({ color = 'white', size = 16 }) => (
  <Svg width={`${size}`} height={`${size}`} viewBox="0 0 14 14" fill="none">
    <Path d="M7 1V13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M13 7.24975H1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);