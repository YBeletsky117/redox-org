import React from 'react';
import { Platform } from 'react-native';
import { boolean, color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Header } from '../lib';
import { action } from '@storybook/addon-actions';
import { COLORS } from '../lib/constants/colors';

const actions = {
  onPress: action('onPress'),
};

if (Platform.OS === 'web') {
  storiesOf('Header', module)
  .add('Header', args => (
    <Header
      key="Header"
      {...args}
      {...actions}
    />
  ),
  {
    argTypes: {
      title: { control: { type: 'text' }, name: 'title', defaultValue: 'Home' },
      bottomLine: { control: { type: 'boolean' }, name: 'bottomLine', defaultValue: true },
    }
  });
} else {
  storiesOf('Header', module)
  .add('Header', () => (
    <Header
      title={text('title', 'Home')}
      bottomLine={boolean('bottomLine', true)}
      {...actions}
    />
  ))
}