import React from 'react';
import { Platform, View } from 'react-native';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Space } from '../lib';

if (Platform.OS === 'web') {
  storiesOf('Space', module)
  .add('Space', args => (
    <Space
      key="Space"
      {...args}
    >
      <View style={{width: 150, height: 50, backgroundColor: 'blue'}} />
    </Space>
  ),
  {
    argTypes: {
      m: { control: { type: 'range', min: 0, max: 100, step: 1 }, name: 'm', defaultValue: 0 },
      mH: { control: { type: 'range', min: 0, max: 100, step: 1 }, name: 'mH', defaultValue: 0 },
      mV: { control: { type: 'range', min: 0, max: 100, step: 1 }, name: 'mV', defaultValue: 0 },
      ml: { control: { type: 'range', min: -100, max: 100, step: 1 }, name: 'ml', defaultValue: 0 },
      mr: { control: { type: 'range', min: -100, max: 100, step: 1 }, name: 'mr', defaultValue: 0 },
      mt: { control: { type: 'range', min: -100, max: 100, step: 1 }, name: 'mt', defaultValue: 0 },
      mb: { control: { type: 'range', min: -100, max: 100, step: 1 }, name: 'mb', defaultValue: 0 },
      zIndex: { control: { type: 'number' }, name: 'zIndex', defaultValue: 1000 },
    },
  });
} else {
  storiesOf('Space', module)
  .add('Space', () => (
    <Space
      m={number('m', 0, { range: true, min: 0, max: 100, step: 1 })}
      mH={number('mH', 0, { range: true, min: 0, max: 100, step: 1 })}
      mV={number('mV', 0, { range: true, min: 0, max: 100, step: 1 })}
      ml={number('ml', 0, { range: true, min: 0, max: 100, step: 1 })}
      mr={number('mr', 0, { range: true, min: 0, max: 100, step: 1 })}
      mt={number('mt', 0, { range: true, min: 0, max: 100, step: 1 })}
      mb={number('mb', 0, { range: true, min: 0, max: 100, step: 1 })}
      zIndex={number('zIndex', 1000)}
    >
      <View style={{width: 100, height: 50, backgroundColor: 'blue'}} />
    </Space>
  ))
}