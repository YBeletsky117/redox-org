import React from 'react';
import { Platform } from 'react-native';
import { color, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Fallback } from '../lib/shared/CatchError/Fallback';
import { COLORS } from '../lib/constants/colors';
import { CenterView } from './CenterView';
import { action } from '@storybook/addon-actions';

const actions = {
  resetError: action('resetError'),
};

if (Platform.OS === 'web') {
  storiesOf('CatchError', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('CatchError', args => (
    <Fallback {...actions} />
  ));
} else {
  storiesOf('CatchError', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('CatchError', () => (
    <Fallback {...actions} />
  ))
}