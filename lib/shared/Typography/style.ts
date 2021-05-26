import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = () => {
  const { dp, fs } = dimens();

  const styles = StyleSheet.create({
    text: {
      color: COLORS.NEUTRAL_00,
    },
    bold: {
      fontWeight: 'bold',
    },
  });

  return {
    dp, fs,
    styles,
  };
};