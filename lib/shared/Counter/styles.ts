import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = () => {
  const { dp, fs } = dimens();

  const styles = StyleSheet.create({
    count: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    badge: {
      height: dp * 8,
      width: dp * 8,
      borderRadius: dp * 4,
    },
    small: {
      height: dp * 14,
      minWidth: dp * 14,
      borderRadius: dp * 7,
      paddingHorizontal: dp * 3,
    },
    medium: {
      height: dp * 18,
      minWidth: dp * 18,
      borderRadius: dp * 9,
      paddingHorizontal: dp * 5,
    },
    large: {
      height: dp * 22,
      minWidth: dp * 22,
      borderRadius: dp * 11,
      paddingHorizontal: dp * 7,
    },
    text: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
    },
    text_small: {
      fontSize: fs.xSmall,
    },
    text_medium: {
      fontSize: fs.small,
    },
    text_large: {
      fontSize: fs.medium,
    },
  });

  return {
    dp,
    fs,
    styles,
  }
};