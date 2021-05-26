import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const StopSVG: FC<Props> = ({ color = '#FA422A', size = 22 }) => (
  <Svg width={`${size}`} height={`${size}`} viewBox="0 0 22 22" fill="none">
    <Path d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM16 10H6C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12H16C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10Z" fill={color}/>
  </Svg>
  
);