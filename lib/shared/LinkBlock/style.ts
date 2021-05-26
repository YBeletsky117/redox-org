import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { dimens } from '../../utils/dimens';

export const getStyles = () => {
  const { dp, fs } = dimens();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: dp * 12,
      backgroundColor: COLORS.WHITE,
      borderTopWidth: 0.5,
      borderTopColor: COLORS.GRAY,
      paddingVertical: dp * 24,
    },
    icon: {
      width: dp * 20,
      height: dp * 20,
    },
    title: {
      flex: 1,
      marginLeft: dp * 12,
      color: COLORS.BLACK,
      fontSize: fs.small,
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: fs.xSmall,
      color: COLORS.GRAY,
      fontWeight: 'normal',
    },
    arrow: {
      width: dp * 8,
      height: dp * 12,
      marginRight: dp * 12,
    },
  });
};