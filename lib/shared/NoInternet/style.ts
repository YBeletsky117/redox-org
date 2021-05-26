import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = () => {
  const { dp, fs } = dimens();

  const styles = StyleSheet.create({
    noNetText: {
      marginVertical: dp * 10,
      fontWeight: 'bold',
      fontSize: fs.medium,
    },
    checkNetConnectionText: {
      marginVertical: dp * 10,
      textAlign: 'center',
      width: '50%',
    },
    try: {
      color: COLORS.BLUE,
      fontWeight: 'bold',
      fontSize: fs.xSmall,
    },
  });

  return {
    dp, fs,
    styles,
  };
};
