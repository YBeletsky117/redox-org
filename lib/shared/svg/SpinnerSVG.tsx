import React, { FC } from 'react';
import { Animated, Easing } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  rotation?: string;
}

export const SpinnerSVG: FC<Props> = ({
  size = 32,
  rotation = 'right'
}) => {
  const rotate = new Animated.Value(0);

  Animated.loop(Animated.timing(rotate, {
    toValue: 1,
    duration: 1000,
    easing: Easing.linear,
    useNativeDriver: true,
  })).start();

  const direction = {
    left: '-',
    right: '',
  }[rotation];
  
  const rotateData = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${direction}360deg`],
  });

  return (
    <Animated.View style={{transform: [{rotate: rotateData}]}}>
      <Svg width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M8.05041 14.2894C8.25841 13.2686 8.66481 12.3214 9.22001 11.483L5.78641 8.04944C4.41201 9.81904 3.49201 11.955 3.20081 14.2894H8.05041Z" fill="#608EFB"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M11.4824 9.21982C12.3208 8.66462 13.268 8.25822 14.2888 8.05022V3.20062C11.9544 3.49182 9.81843 4.41182 8.04883 5.78622L11.4824 9.21982Z" fill="#3D6AFF"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M17.4894 3.20032V8.04992C18.5102 8.25792 19.4574 8.66432 20.2958 9.21952L23.7294 5.78592C21.9598 4.41152 19.8238 3.49152 17.4894 3.20032Z" fill="white"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M9.22001 20.2965C8.66481 19.4581 8.25841 18.5109 8.05041 17.4901H3.20081C3.49201 19.8245 4.41201 21.9605 5.78641 23.7301L9.22001 20.2965Z" fill="#8DAEFC"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M14.2894 23.7285C13.2686 23.5205 12.3214 23.1141 11.483 22.5589L8.04944 25.9925C9.81904 27.3669 11.955 28.2869 14.2894 28.5781V23.7285Z" fill="#8DAEFC"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M22.559 11.4824C23.1142 12.3208 23.5206 13.268 23.7286 14.2888H28.5782C28.287 11.9544 27.367 9.81843 25.9926 8.04883L22.559 11.4824Z" fill="white"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M20.2965 22.5589C19.4581 23.1141 18.5109 23.5205 17.4901 23.7285V28.5781C19.8245 28.2869 21.9605 27.3669 23.7301 25.9925L20.2965 22.5589Z" fill="#B9D0FD"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M23.7285 17.4894C23.5205 18.5102 23.1141 19.4574 22.5589 20.2958L25.9925 23.7294C27.3669 21.9598 28.2869 19.8238 28.5781 17.4894H23.7285Z" fill="#B9D0FD"/>
      </Svg>
    </Animated.View>
  );
};