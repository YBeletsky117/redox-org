import { StyleSheet } from 'react-native';
import { dimens } from '../../utils/dimens';
import { COLORS } from '../../constants/colors';

export const getStyles = (isFocus: boolean) => {
  const { dp, fs, width, height } = dimens();

  const styles = StyleSheet.create({
    date: {
      borderRadius: 10,
      borderWidth: 0.75,
      paddingLeft: dp * 12,
      paddingRight: dp * 38,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    compact: {
      height: dp * 40,
    },
    regular: {
      height: dp * 44,
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
    dateText: {
      color: COLORS.NEUTRAL_00,
      fontSize: fs.normal,
    },
    container: {
      flex: 1,
      backgroundColor: COLORS.NEUTRAL_55P,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginHorizontal: 17,
      width: '35%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
    },
    calendar: {
      borderRadius: 8,
      backgroundColor: COLORS.WHITE,
      alignItems: 'center',
      width: width - 30,
    },
    calendarText: {
      fontSize: fs.medium,
      color: COLORS.NEUTRAL_70,
      fontWeight: 'bold',
      marginHorizontal: 20,
    },
    targetDays: {
      backgroundColor: COLORS.PRIMARY_70,
    },
    text: {
      fontWeight: 'bold',
      fontSize: fs.small,
    },
    buttonText: {
      color: COLORS.WHITE,
      fontSize: fs.small,
      fontWeight: 'bold',
    },
  });

  return {
    styles,
    dp, fs, width, height,
  };
};
