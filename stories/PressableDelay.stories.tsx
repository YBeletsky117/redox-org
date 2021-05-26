import React from 'react';
import { Text } from 'react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import { PressableDelay, Space } from '../lib';

const actions = {
  onPress: action('onPress'),
  // onLongPress: action('onLongPress'),
};

storiesOf('PressableDelay', module)
.addDecorator((getStory) => <Space m={12}>{getStory()}</Space>)
.add('PressableDelay', () => (
  <PressableDelay
    key="PressableDelay"
    {...actions}
    loading={true}
  >
    <Text>{text('Press text', 'press')}</Text>
  </PressableDelay>
));