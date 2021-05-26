import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { PressableDelay } from '../PressableDelay';
import { Space } from '../Space';
import { ArrowLineSVG } from '../svg';
import { getStyles } from './style';

interface Props {
  title?: string;
  onPress?: () => void;
  customView?: JSX.Element | null;
  styleColor?: any;
  bottomLine?: boolean;
  textAdditionStyles?: {
    [key: string]: number | string;
  };
}

export const Header: FC<Props> = ({
  onPress,
  title = '',
  customView = null,
  styleColor = {},
  bottomLine = false,
  textAdditionStyles = {},
}) => {
  const { styles, dp } = getStyles();

  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          styleColor,
          bottomLine ? styles.line : {}
        ]}
      >
        {
          onPress ? (
            <Space mr={16 * dp}>
              <PressableDelay onPress={onPress}>
                <ArrowLineSVG size={dp * 22} color={COLORS.NEUTRAL_40} />
              </PressableDelay>
            </Space>
          ) : null
        }

        <Text style={[styles.textHeader, textAdditionStyles]} numberOfLines={3}>
          {title}
        </Text>

        {customView}
      </View>
    </SafeAreaView>
  );
};