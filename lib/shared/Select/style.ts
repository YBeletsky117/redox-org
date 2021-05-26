import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = (isFocus: boolean, enabled: boolean) => {
  const { dp, fs, width, height } = dimens();

  const styles = StyleSheet.create({
    select_wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    select: {
      borderRadius: 10,
      borderWidth: 0.75,
      paddingLeft: dp * 12,
      paddingRight: dp * 38,
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    placeholder: {
      color: enabled ? COLORS.NEUTRAL_30 : COLORS.NEUTRAL_40,
      fontSize: fs.medium,
    },
    selected: {
      color: COLORS.NEUTRAL_00,
      fontSize: fs.medium,
    },
    arrow: {
      position: 'absolute',
      right: dp * 12,
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
      height: dp * 40,
    },
    regular: {
      height: dp * 44,
    },
    errorMessage: {
      fontSize: fs.xSmall,
      color: COLORS.RED_50,
    },
    modal: {
      width,
      height,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    options: {
      width: '100%',
      position: 'relative',
      paddingHorizontal: dp * 6,
      borderWidth: 1,
      backgroundColor: COLORS.WHITE,
      borderRadius: dp * 8,
      shadowColor: COLORS.NEUTRAL_00,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
    web: {
      borderColor: COLORS.WHITE,
    },
    android: {
      borderColor: COLORS.WHITE,
    },
    ios: {
      borderColor: COLORS.NEUTRAL_10,
    },
    optionDefault: {
      marginVertical: dp * 8,
      paddingVertical: dp * 8,
      paddingHorizontal: dp * 6,
      justifyContent: 'center',
    },
    option: {
      marginBottom: dp * 8,
      paddingVertical: dp * 8,
      paddingHorizontal: dp * 12,
      justifyContent: 'center',
    },
    optionValue: {
      color: COLORS.NEUTRAL_30,
      fontSize: fs.small,
    },
    selectedOption: {
      backgroundColor: COLORS.PRIMARY_80,
      borderRadius: 4,
    },
  });

  return {
    dp,
    fs,
    styles,
    width,
    height,
  }
};