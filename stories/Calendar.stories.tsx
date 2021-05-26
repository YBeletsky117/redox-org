import React from 'react';
import { Platform } from 'react-native';
import { color, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Calendar } from '../lib';
import { COLORS } from '../lib/constants/colors';
import { CenterView } from './CenterView';

const sizes = {
  compact: 'compact',
  regular: 'regular',
};

if (Platform.OS === 'web') {
  storiesOf('Calendar', module)
  .add('Calendar', args => (
    <Calendar
      key="Calendar"
      {...args}
    />
  ),
  {
    argTypes: {
      size: { control: { type: 'inline-radio', options: Object.values(sizes) }, name: 'size', defaultValue: 'compact' },
    },
  });
} else {
  storiesOf('Calendar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Calendar', () => (
    <Calendar
      size={select('size', sizes, 'medium')}
    />
  ))
}