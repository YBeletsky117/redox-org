import React from 'react';
import { Platform } from 'react-native';
import { text, number, select, color, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import { Button, Space } from '../lib';
import { COLORS } from '../lib/constants/colors';
import { PlusSVG, ArrowSVG } from '../lib/shared/svg';

const actions = {
  onPress: action('onPress'),
};

const types = {
  primary: 'primary',
  secondary: 'secondary',
  muted: 'muted',
  tertiary: 'tertiary',
  outline: 'outline',
  disabled: 'disabled',
};

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};


if (Platform.OS === 'web') {
  storiesOf('Button', module)
  .add('Button', args => (
    <Button
      key="Button"
      {...args}
      imgBefore={args.imgBefore ? PlusSVG : null}
      imgAfter={args.imgAfter ? ArrowSVG : null}
      {...actions}
    />
  ),
  {
    argTypes: {
      label: {
        name: 'label',
        description: 'Button label',
        control: { type: 'text' },
        defaultValue: 'Button',
      },
      type: {
        name: 'type',
        description: 'Button type',
        control: { type: 'inline-radio', options: Object.values(types) },
        defaultValue: 'primary',
      },
      size: {
        name: 'size',
        description: 'Button size',
        control: { type: 'inline-radio', options: Object.values(sizes) },
        defaultValue: 'medium',
      },
      color: {
        name: 'color',
        description: 'Button color',
        control: { type: 'color' },
        defaultValue: COLORS.BLUE,
      },
      count: {
        name: 'count',
        description: 'Button count',
        control: { type: 'range', min: 0, max: 100, step: 1 },
        defaultValue: 1,
      },
      fixedLayout: {
        name: 'fixedLayout',
        description: 'Button fixed layout',
        control: { type: 'boolean' },
      },
      uppercase: {
        name: 'uppercase',
        description: 'Button label uppercase',
        control: { type: 'boolean' },
      },
      loading: {
        name: 'loading',
        description: 'Button loading state',
        control: { type: 'boolean' },
      },
      imgBefore: {
        name: 'imgBefore',
        description: 'Callback function returning JSX or null.',
        control: { type: 'boolean' },
        defaultValue: false,
      },
      imgAfter: {
        name: 'imgAfter',
        description: 'Callback function returning JSX or null.',
        control: { type: 'boolean' },
        defaultValue: false,
      },
      onPress: {
        name: 'onPress',
        description: 'Callback function',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/frkAQAbowoJ3dEtJAzjqtR/Testo-dsys?node-id=3%3A130',
    },
  });
} else {
  storiesOf('Button', module)
  .addDecorator((getStory) => <Space m={12}>{getStory()}</Space>)
  .add('Button', () => (
    <Button
      label={text('Button name', 'Button')}
      type={select('type', types, 'primary')}
      size={select('size', sizes, 'medium')}
      color={color('color', COLORS.PRIMARY_50)}
      count={number('count', 0, { range: true, min: 0, max: 100, step: 1 })}
      fixedLayout={boolean('fixedLayout', false)}
      uppercase={boolean('uppercase', false)}
      loading={boolean('loading', false)}
      imgBefore={boolean('imgBefore', false) ? PlusSVG : null}
      imgAfter={boolean('imgAfter', false) ? ArrowSVG : null}
      {...actions}
    />
  ));
}