import React from 'react';
import { Platform } from 'react-native';
import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { NoInternet } from '../lib';
import { action } from '@storybook/addon-actions';
import { COLORS } from '../lib/constants/colors';

const actions = {
  onPress: action('onPress'),
};

if (Platform.OS === 'web') {
  storiesOf('NoInternet', module)
  .add('NoInternet', args => (
    <NoInternet
      key="NoInternet"
      {...actions}
    />
  ),
  {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: COLORS.NEUTRAL_50 },
    }
  });
} else {
  storiesOf('NoInternet', module)
  .add('NoInternet', () => (
    <NoInternet
      {...actions}
    />
  ))
}