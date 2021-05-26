import React from 'react';
import { Platform } from 'react-native';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import { Space, Input } from '../lib';

const actions = {
  onChangeText: action('onChangeText'),
  onEndEditing: action('onEndEditing'),
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
};

const keyboardTypes = {
  default: 'default',
  'number-pad': 'number-pad',
  'decimal-pad': 'decimal-pad',
  numeric: 'numeric',
  'email-address': 'email-address',
  'phone-pad': 'phone-pad',
};

const returnKeyTypes = {
  done: 'done',
  go: 'go',
  next: 'next',
  search: 'search',
  send: 'send',
};

const sizes = {
  compact: 'compact',
  regular: 'regular',
};

const masks = {
  '': '',
  '+9 (999) 999-99-99': '+9 (999) 999-99-99',
  '99.99.9999': '99.99.9999',
};


if (Platform.OS === 'web') {
  storiesOf('Input', module)
  .add('Input', args => (
    <Input
      {...args}
      {...actions}
    />
  ),
  {
    argTypes: {
      value: {
        name: 'value',
        description: 'Input value, type string',
        control: { type: 'text' },
        defaultValue: '',
      },
      label: {
        name: 'label',
        description: 'Input label, type string',
        control: { type: 'text' },
        defaultValue: 'label',
      },
      placeholder: {
        name: 'placeholder',
        description: 'Input placeholder, type string',
        control: { type: 'text' },
        defaultValue: 'placeholder',
      },
      errorMessage: {
        name: 'errorMessage',
        description: 'Error message, type string',
        control: { type: 'text' },
        defaultValue: '',
      },
      size: {
        name: 'size',
        description: 'Input size, type string',
        control: { type: 'inline-radio', options: Object.values(sizes) },
        defaultValue: 'compact',
      },
      name: {
        name: 'name',
        description: 'The name of the property key of the passed object as the onChangeText parameter, type string',
        control: { type: 'text' },
        defaultValue: 'key',
      },
      mask: {
        name: 'mask',
        description: 'Input mask, type string',
      },
      maxLength: {
        name: 'maxLength',
        description: 'Input max length, type number',
        control: { type: 'range', min: 0, max: 100, step: 1 },
        defaultValue: 20,
      },
      keyboardType: {
        name: 'keyboardType',
        description: 'Keyboard type, type string',
        control: { type: 'inline-radio', options: Object.values(keyboardTypes) },
        defaultValue: 'default',
      },
      returnKeyType: {
        name: 'returnKeyType',
        description: 'Return key type, type string',
        control: { type: 'inline-radio', options: Object.values(returnKeyTypes) },
        defaultValue: 'done',
      },
      removable: {
        name: 'removable',
        description: 'Input removable, type boolean',
        control: { type: 'boolean' },
        defaultValue: true,
      },
      secureText: {
        name: 'secureText',
        description: 'Input secureText, type boolean',
        control: { type: 'boolean' },
      },
      required: {
        name: 'required',
        description: 'Input required, type boolean',
        control: { type: 'boolean' },
      },
      editable: {
        name: 'editable',
        description: 'Input editable, type boolean',
        control: { type: 'boolean' },
        defaultValue: true,
      },
      isFocused: {
        name: 'isFocused',
        description: 'Input is focused, type boolean',
        control: { type: 'boolean' },
      },
      multiline: {
        name: 'multiline',
        description: 'Input multiline, type boolean',
        control: { type: 'boolean' },
      },
      onChangeText: {
        name: 'onChangeText',
        description: 'function',
      },
      onEndEditing: {
        name: 'onEndEditing',
        description: 'function',
      },
      onFocus: {
        name: 'onFocus',
        description: 'function',
      },
      onBlur: {
        name: 'onBlur',
        description: 'function',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/frkAQAbowoJ3dEtJAzjqtR/Testo-dsys?node-id=22%3A12',
    },
  });
} else {
  storiesOf('Input', module)
  .addDecorator((getStory) => <Space m={12}>{getStory()}</Space>)
  .add('Input', () => (
    <Input
      value={text('value', '')}
      label={text('label', 'label')}
      placeholder={text('placeholder', 'placeholder')}
      errorMessage={text('errorMessage', '')}
      size={select('size', sizes, 'compact')}
      name={text('name', 'key')}
      mask={select('mask', masks, '')}
      maxLength={number('maxLength', 20)}
      keyboardType={select('keyboardType', keyboardTypes, 'default')}
      returnKeyType={select('returnKeyType', returnKeyTypes, 'done')}
      removable={boolean('removable', true)}
      secureText={boolean('secureText', false)}
      required={boolean('required', false)}
      editable={boolean('editable', true)}
      isFocused={boolean('isFocused', false)}
      multiline={boolean('multiline', false)}
      {...actions}
    />
  ));
}