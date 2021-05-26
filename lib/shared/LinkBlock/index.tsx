import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';

import { PressableDelay } from '../PressableDelay';
import { getStyles } from './style';
import { ArrowSVG } from '../svg';
import { COLORS } from '../../constants/colors';

interface Props {
  icon?: string;
  title: string;
  subTitle?: string;
  onPress: () => void;
}

export const LinkBlock: FC<Props> = ({
  icon,
  title,
  subTitle,
  onPress
}) => {
  const styles = getStyles();
  
  return (
    <PressableDelay onPress={onPress}>
      <View style={styles.container}>
        {
          !!icon ? (
            <Image
              source={{uri: icon}}
              style={styles.icon}
            />
          ) : null
        }

        <Text style={styles.title}>
          {title}

          <Text style={styles.subTitle}>
            {'\n\n'}
            {subTitle ?? ''}
          </Text>
        </Text>

        <ArrowSVG color={COLORS.NEUTRAL_40} />
      </View>
    </PressableDelay>
  );
};