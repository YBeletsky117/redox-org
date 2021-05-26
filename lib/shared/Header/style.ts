import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = () => {
  const { dp, fs } = dimens();

  const styles =  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: dp * 16,
      height: dp * 40,
    },
    textHeader: {
      fontSize: fs.normal,
      color: COLORS.BLACK,
      fontWeight: 'bold',
      marginRight: dp * 16,
      flexWrap: 'wrap',
      flex: 1,
    },
    line: {
      borderBottomColor: COLORS.GRAY,
      borderBottomWidth: 0.5,
    },
  });

  return {
    dp, fs,
    styles,
  };
};
