import { StyleSheet } from 'react-native';
import { dimens } from '../../utils/dimens';

export const getStyles = () => {
  const { dp, fs } = dimens();

  const styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    small: {
      paddingHorizontal: dp * 14,
      height: dp * 34,
      borderRadius: 6,
    },
    medium: {
      paddingHorizontal: dp * 16,
      height: dp * 39,
      borderRadius: 8,
    },
    large: {
      paddingHorizontal: dp * 18,
      height: dp * 44,
      borderRadius: 10,
    },
    text: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  return {
    dp,
    fs,
    styles,
  };
};