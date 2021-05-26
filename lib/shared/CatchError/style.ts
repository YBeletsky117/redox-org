import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = () => {
  const { dp, fs } = dimens();

  return StyleSheet.create({
    error: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginVertical: dp * 10,
      fontWeight: 'bold',
      fontSize: fs.medium,
    },
    try: {
      color: COLORS.BLUE,
      fontWeight: 'bold',
      fontSize: fs.xSmall,
    },
  });
};