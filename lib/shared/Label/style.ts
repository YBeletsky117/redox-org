import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = () => {
  const { dp, fs } = dimens();

  return StyleSheet.create({
    title: {
      fontSize: fs.small,
    },
    asterisk: {
      color: COLORS.RED,
    },
  });
};