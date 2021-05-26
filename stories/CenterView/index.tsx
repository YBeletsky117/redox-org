import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './style';

type Props = {
  vOnly?: boolean;
};

export const CenterView: FC<Props> = ({ vOnly = false, children }) => (
  <ScrollView contentContainerStyle={vOnly ? styles.v : styles.vh}>
    <View>{children}</View>
  </ScrollView>
);