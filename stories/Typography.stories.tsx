import React from 'react';
import { Platform } from 'react-native';
import { boolean, color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Typography } from '../lib';
import { action } from '@storybook/addon-actions';
import { COLORS } from '../lib/constants/colors';

const actions = {
  onPress: action('onPress'),
};

if (Platform.OS === 'web') {
  storiesOf('Typography', module)
  .add('Typography', args => (
    <Typography
      key="Typography"
      {...args}
      {...actions}
    />
  ),
  {
    argTypes: {
      text: { control: { type: 'text' }, name: 'text', defaultValue: 'Text' },
      color: { control: { type: 'color' }, name: 'color', defaultValue: COLORS.NEUTRAL_50 },
      bold: { control: { type: 'boolean' }, name: 'bold', defaultValue: false },
    }
  });
} else {
  storiesOf('Typography', module)
  .add('Typography', () => (
    <Typography
      text={text('text', 'Text')}
      color={color('color', COLORS.NEUTRAL_00)}
      bold={boolean('bold', false)}
      {...actions}
    />
  ))
}