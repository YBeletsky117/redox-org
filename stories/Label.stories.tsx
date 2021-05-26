import React from 'react';
import { Platform } from 'react-native';
import { boolean, color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Label, Space } from '../lib';
import { COLORS } from '../lib/constants/colors';

if (Platform.OS === 'web') {
  storiesOf('Label', module)
  .addDecorator((getStory) => <Space m={12}>{getStory()}</Space>)
  .add('Label', args => (
    <Label
      key="Label"
      {...args}
    />
  ),
  {
    argTypes: {
      title: { control: { type: 'text' }, name: 'title', defaultValue: 'label' },
      color: { control: { type: 'color' }, name: 'color', defaultValue: COLORS.GRAY },
      required: { control: { type: 'boolean' }, name: 'required' },
      isAfter: { control: { type: 'boolean' }, name: 'isAfter' },
    },
  });
} else {
  storiesOf('Label', module)
  .addDecorator((getStory) => <Space m={12}>{getStory()}</Space>)
  .add('Label', () => (
    <Label
      title={text('title', 'label')}
      color={color('color', 'grey')}
      required={boolean('required', false)}
      isAfter={boolean('isAfter', false)}
    />
  ))
}