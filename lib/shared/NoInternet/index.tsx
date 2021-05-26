import React, { FC } from 'react';
import { Text } from 'react-native';

import { PressableDelay } from '../PressableDelay';
import { getStyles } from './style';
import { WifiOnSVG } from '../svg';
import { COLORS } from '../../constants/colors';
import { Space } from '../Space';

interface Props {
  onPress?: () => void;
}

export const NoInternet: FC<Props> = ({ onPress = () => {} }) => {
  const { styles, dp } = getStyles();
  
  return (
    <Space f={1} justify="center" align="center">
      <Space mV={10}>
        <WifiOnSVG size={dp * 70} color={COLORS.NEUTRAL_50} />
      </Space>

      <Text style={styles.noNetText}>Нет соединения</Text>

      <Text style={styles.checkNetConnectionText}>
        Проверьте подключение к сети и повторите подключение
      </Text>
      
      <PressableDelay onPress={onPress}>
        <Text style={styles.try}>Подключиться</Text>
      </PressableDelay>
    </Space>
);
};