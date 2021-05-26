import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const ImageSVG: FC<Props> = ({ color = 'white', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.66618 2H16.3338C19.738 2 22 4.42974 22 7.91672V16.0833C22 19.5704 19.7378 22 16.3328 22H7.66618C4.26205 22 2 19.5703 2 16.0833V7.91672C2 4.43267 4.26744 2 7.66618 2ZM16.3338 3.50323H7.66618C5.1222 3.50323 3.50323 5.24018 3.50323 7.91672V16.0833C3.50323 16.8284 3.62799 17.5003 3.86293 18.0821L5.0131 16.686L5.52124 16.0594C6.80032 14.4746 7.97286 13.7901 9.5086 14.4333C9.74181 14.5312 9.94127 14.6368 10.1965 14.7944L10.8571 15.2206C11.5169 15.6389 11.831 15.6989 12.3135 15.4375C12.7425 15.2054 13.0433 14.8808 13.5007 14.1766L13.801 13.6989L14.0052 13.3713C14.1888 13.0813 14.3196 12.8909 14.4797 12.6836C15.5379 11.3141 17.1879 10.8681 18.6302 11.7358C19.2548 12.1122 19.7085 12.4859 20.4968 13.238V7.91672C20.4968 5.23689 18.8828 3.50323 16.3338 3.50323ZM20.4968 15.3147L20.4479 15.271C20.3437 15.1751 20.2322 15.0699 20.0984 14.9418L19.3991 14.2686C18.7285 13.6318 18.3448 13.3189 17.8548 13.0236C17.1138 12.5778 16.2888 12.8008 15.6694 13.6024L15.5441 13.7712C15.5025 13.8295 15.4602 13.8912 15.4146 13.96L15.0231 14.581C14.2848 15.7774 13.8367 16.3224 13.0293 16.7594C12.0349 17.2981 11.2246 17.1862 10.2392 16.6047L9.80131 16.3276L9.43305 16.0899C9.22854 15.9629 9.08235 15.8847 8.92744 15.8197C8.25699 15.5388 7.66126 15.8493 6.83856 16.8245L5.03219 19.0314C4.93464 19.1494 4.83382 19.2713 4.72925 19.3976C5.44602 20.1018 6.44961 20.4968 7.66618 20.4968H16.3328C18.8826 20.4968 20.4968 18.7632 20.4968 16.0833V15.3147ZM6.27108 8.79982C6.27108 7.36374 7.43616 6.19823 8.87167 6.19823C10.308 6.19823 11.4733 7.36352 11.4733 8.79982C11.4733 10.2361 10.308 11.4014 8.87167 11.4014C7.43616 11.4014 6.27108 10.2359 6.27108 8.79982ZM9.97004 8.79982C9.97004 8.19373 9.47776 7.70146 8.87167 7.70146C8.26649 7.70146 7.77431 8.19382 7.77431 8.79982C7.77431 9.40582 8.26649 9.89818 8.87167 9.89818C9.47776 9.89818 9.97004 9.40591 9.97004 8.79982Z" fill={color}/>
  </Svg>
);