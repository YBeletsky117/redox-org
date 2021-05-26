import React, { FC, ReactNode } from 'react';
import { View, Text } from 'react-native';

import { PressableDelay } from '../PressableDelay';
import { Space } from '../Space';
import { Counter } from '../Counter';
import { COLORS } from '../../constants/colors';
import { SpinnerSVG } from '../svg';
import { getStyles } from './style';

interface Props {
  label?: string;
  type?: string;
  size?: string;
  color?: string;
  width?: string | number;
  count?: number;
  fixedLayout?: boolean;
  uppercase?: boolean;
  loading?: boolean;
  imgBefore?: ({color: string, size: number}) => ReactNode;
  imgAfter?: ({color: string, size: number}) => ReactNode;
  onPress?: () => void;
}

export const Button: FC<Props> = ({
  label = 'button',
  type = 'primary',
  size = 'medium',
  color = COLORS.PRIMARY_50,
  count = 0,
  fixedLayout = false,
  uppercase = false,
  loading = false,
  imgBefore,
  imgAfter,
  onPress = ()=>{},
}) => {
  const { dp, fs, styles } = getStyles();

  const activeButton = !loading && type !== 'disabled';

  const sizes = {
    small: { fontSize: fs.medium, spinnerSize: 26 * dp},
    medium: { fontSize: fs.normal, spinnerSize: 28 * dp },
    large: { fontSize: fs.big, spinnerSize: 30 * dp },
  }[size];

  const buttonStyle = {
    primary: { color: COLORS.WHITE, backgroundColor: color, borderColor: 'transparent' },
    secondary: { color: color, backgroundColor: COLORS.WHITE, borderColor: 'transparent' },
    muted: { color: COLORS.NEUTRAL_40, backgroundColor: COLORS.NEUTRAL_90, borderColor: 'transparent' },
    tertiary: { color: color, backgroundColor: 'transparent', borderColor: 'transparent' },
    outline: { color: color, backgroundColor: 'transparent', borderColor: color },
    disabled: { color: COLORS.WHITE, backgroundColor: COLORS.NEUTRAL_60, borderColor: 'transparent' },
  }[type];

  const handlePress = () => {
    activeButton && onPress();
  };

  const buttonLabel = uppercase ? label.toUpperCase() : label;

  return (
    <PressableDelay onPress={handlePress}>
      <View
        style={[
          styles.button,
          styles[size],
          {
            width: fixedLayout ? '100%' : 'auto',
            backgroundColor: buttonStyle.backgroundColor,
            borderColor: buttonStyle.borderColor,
          }
        ]}
      >
        {
          !loading ? (
            <>
              {
                imgBefore ? (
                  <Space mr={dp * 12}>
                    {
                      imgBefore({
                        color: buttonStyle.color,
                        size: sizes.fontSize
                      })
                    }
                  </Space>
                ) : null
              }

              <Text
                style={[
                  styles.text,
                  { fontSize: sizes.fontSize, color: buttonStyle.color }
                ]}
              >
                {buttonLabel}
              </Text>

              {
                count ? (
                  <Space ml={dp * 12}>
                    <Counter
                      count={count}
                      color={activeButton ? COLORS.RED : COLORS.NEUTRAL_40}
                      size={size}
                    />
                  </Space>
                ) : null
              }

              {
                imgAfter ? (
                  <Space ml={dp * 12}>
                    {
                      imgAfter({
                        color: buttonStyle.color,
                        size: sizes.fontSize
                      })
                    }
                  </Space>
                ) : null
              }
            </>
          ) : (
            <SpinnerSVG
              size={sizes.spinnerSize}
              rotation="left"
            />
          )
        }
      </View>
    </PressableDelay>
  );
};
