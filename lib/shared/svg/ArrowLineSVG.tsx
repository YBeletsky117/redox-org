import React, { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
  direction?: string;
}

export const ArrowLineSVG: FC<Props> = ({
  color = 'white',
  size = 24,
  direction = 'left',
}) => (
  <View
    style={{
      transform: [{
        rotate: {
          top: '90deg',
          bottom: '-90deg',
          left: '0deg',
          right: '180deg',
        }[direction]
      }]}
    }
  >
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.2928 12.8229C20.6922 12.7679 21 12.4205 21 12.0001C21 11.5415 20.6337 11.1698 20.1818 11.1698L5.80007 11.1698L10.9953 5.91866L11.0747 5.8257C11.313 5.50114 11.2876 5.0398 10.9977 4.74441C10.6788 4.41948 10.1608 4.41839 9.84062 4.74198L3.25226 11.4004C3.21304 11.4386 3.17756 11.4806 3.14642 11.526C2.92336 11.8502 2.95478 12.3001 3.24067 12.5889L9.84067 19.2581L9.9326 19.3383C10.2534 19.5787 10.7079 19.551 10.9977 19.2555C11.3166 18.9306 11.3155 18.4049 10.9953 18.0813L5.79877 12.8304L20.1818 12.8304L20.2928 12.8229Z" fill={color}/>
    </Svg>
  </View>
);