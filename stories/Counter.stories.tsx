import React from 'react';
import { Platform } from 'react-native';
import { color, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Counter } from '../lib';
import { COLORS } from '../lib/constants/colors';
import { CenterView } from './CenterView';

const sizes = {
  badge: 'badge',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

if (Platform.OS === 'web') {
  storiesOf('Counter', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Counter', args => (
    <Counter
      key="counter"
      {...args}
    />
  ),
  {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: COLORS.RED_30 },
      count: { control: { type: 'range', min: 0, max: 100, step: 1 }, name: 'count', defaultValue: 1 },
      size: { control: { type: 'inline-radio', options: Object.values(sizes) }, name: 'size', defaultValue: 'medium' },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/frkAQAbowoJ3dEtJAzjqtR/Testo-dsys?node-id=2%3A205',
    },
  });
} else {
  storiesOf('Counter', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Counter', () => (
    <Counter
      color={color('color', 'red')}
      count={number('count', 10)}
      size={select('size', sizes, 'medium')}
    />
  ))
}