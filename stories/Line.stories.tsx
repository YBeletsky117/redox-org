import React from 'react';
import { Platform } from 'react-native';
import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Line } from '../lib';
import { action } from '@storybook/addon-actions';
import { COLORS } from '../lib/constants/colors';

const actions = {
  onPress: action('onPress'),
};

if (Platform.OS === 'web') {
  storiesOf('Line', module)
  .add('Line', args => (
    <Line
      key="Line"
      {...args}
      {...actions}
    />
  ),
  {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: COLORS.NEUTRAL_50 },
    }
  });
} else {
  storiesOf('Line', module)
  .add('Line', () => (
    <Line
      color={color('color', COLORS.NEUTRAL_50)}
      {...actions}
    />
  ))
}