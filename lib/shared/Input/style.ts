import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = (isFocus: boolean) => {
  const { dp, fs } = dimens();

  const styles = StyleSheet.create({
    input_wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      borderRadius: 10,
      borderWidth: 0.75,
      paddingHorizontal: dp * 12,
      paddingVertical: 0,
      color: COLORS.NEUTRAL_00,
      fontSize: fs.medium,
      flex: 1,
    },
    default: {
      backgroundColor: COLORS.NEUTRAL_95,
      borderColor: isFocus ? COLORS.NEUTRAL_10 : COLORS.NEUTRAL_80,
    },
    disabled: {
      backgroundColor: COLORS.NEUTRAL_95,
      borderColor: COLORS.NEUTRAL_95,
      color: COLORS.NEUTRAL_40,
    },
    error: {
      backgroundColor: COLORS.RED_100,
      borderColor: COLORS.RED_50,
    },
    compact: {
      minHeight: dp * 40,
    },
    regular: {
      minHeight: dp * 44,
    },
    multiline: {
      minHeight: dp * 64,
      paddingVertical: dp * 9,
    },
    errorMessage: {
      fontSize: fs.xSmall,
      color: COLORS.RED_50,
    },
    hidePass: {
      position: 'absolute',
      right: dp * 12,
    },
  });

  return {
    dp,
    fs,
    styles,
  }
};