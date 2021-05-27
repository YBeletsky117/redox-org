import { Dimensions } from 'react-native';
interface DimensionsTypes {
  xxSmall: number;
  xSmall: number;
  small: number;
  medium: number;
  normal: number;
  big: number;
  xBig: number;
  xxBig: number;
  xxxBig: number;
  large: number;
  xLarge: number;
  xxLarge: number;
}
export const dimens = () => {
  const { width, height } = Dimensions.get('window');

  const dp: number = width <= 360 ? 1 : width <= 768 ? 1.2 : width <= 990 ? 1.5 : 2;
  const fs: DimensionsTypes = {
    xxSmall: dp * 8,
    xSmall: dp * 10,
    small: dp * 12,
    medium: dp * 14,
    normal: dp * 16,
    big: dp * 18,
    xBig: dp * 20,
    xxBig: dp * 24,
    xxxBig: dp * 26,
    large: dp * 28,
    xLarge: dp * 30,
    xxLarge: dp * 32,
  };

  return {
    dp,
    fs,
    width,
    height,
  };
};