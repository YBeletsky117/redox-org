import React from 'react';
import { Platform } from 'react-native';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import { Space, Select } from '../lib';

const actions = {
  onValueChange: action('onValueChange'),
  onFocus: action('onFocus'),
};

const options = [
  {optionKey: '1', optionNameKey: 'option1', optionValueKey: 'Option 1 Option 1Option1Option1Option1Option1Option1Option Option 1 1Option1Option1Option 1'},
  {optionKey: '2', optionNameKey: 'option2', optionValueKey: 'Option 2'},
  {optionKey: '3', optionNameKey: 'option3', optionValueKey: 'Option 3'},
  {optionKey: '4', optionNameKey: 'option4', optionValueKey: 'Option 4'},
  {optionKey: '5', optionNameKey: 'option5', optionValueKey: 'Option 5'},
];

const sizes = {
  compact: 'compact',
  regular: 'regular',
};

const modes = {
  dropdown: 'dropdown',
  dialog: 'dialog',
};

if (Platform.OS === 'web') {
  storiesOf('Select', module)
  .add('Select', args => (
    <Select
      {...args}
      options={options}
      {...actions}
    />
  ),
  {
    argTypes: {
      selectedValue: {
        name: 'selectedValue',
        description: 'Select selectedValue, type string',
        control: { type: 'text' },
        defaultValue: '',
      },
      options: {
        name: 'options',
        description: 'Select options, type Array<Option> Example: [{optionKey: "1", optionNameKey: "option1", optionValueKey: "Option 1"}]',
      },
      optionsMaxHeight: {
        name: 'optionsMaxHeight',
        description: 'Select optionsMaxHeight, type number',
        control: { type: 'range', min: 100, max: 500, step: 1 },
        defaultValue: 300,
      },
      optionValueKey: {
        name: 'optionValueKey',
        description: 'Select optionValueKey, type string',
        control: { type: 'inline-radio', options: ['optionValueKey'] },
        defaultValue: 'optionValueKey',
      },
      optionNameKey: {
        name: 'optionNameKey',
        description: 'Select optionNameKey, type string',
        control: { type: 'inline-radio', options: ['optionNameKey'] },
        defaultValue: 'optionNameKey',
      },
      optionKey: {
        name: 'optionKey',
        description: 'Select optionKey, type string',
        control: { type: 'inline-radio', options: ['optionKey'] },
        defaultValue: 'optionKey',
      },
      label: {
        name: 'label',
        description: 'Select label, type string',
        control: { type: 'text' },
        defaultValue: 'label',
      },
      placeholder: {
        name: 'placeholder',
        description: 'Select placeholder, type string',
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
        description: 'Select size, type string',
        control: { type: 'inline-radio', options: Object.values(sizes) },
        defaultValue: 'compact',
      },
      mode: {
        name: 'mode',
        description: 'Select mode, type string',
        control: { type: 'inline-radio', options: Object.values(modes) },
        defaultValue: 'dropdown',
      },
      removable: {
        name: 'removable',
        description: 'Select removable, type boolean',
        control: { type: 'boolean' },
        defaultValue: true,
      },
      required: {
        name: 'required',
        description: 'Select required, type boolean',
        control: { type: 'boolean' },
      },
      enabled: {
        name: 'enabled',
        description: 'Select enabled, type boolean',
        control: { type: 'boolean' },
        defaultValue: true,
      },
      isFocused: {
        name: 'isFocused',
        description: 'Select is focused, type boolean',
        control: { type: 'boolean' },
      },
      onValueChange: {
        name: 'onValueChange',
        description: 'function',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/frkAQAbowoJ3dEtJAzjqtR/Testo-dsys?node-id=22%3A12',
    },
  });
} else {
  storiesOf('Select', module)
  .addDecorator((getStory) => <Space m={12}>{getStory()}</Space>)
  .add('Select', () => (
    <>
      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />

      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />

      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />

      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />

      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />

      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />

      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />

      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />

      <Select
        selectedValue={text('selectedValue', '')}
        options={options}
        optionsMaxHeight={number('optionsMaxHeight', 300, { range: true, min: 50, max: 500, step: 1 })}
        optionValueKey={select('optionValueKey', {optionValueKey: 'optionValueKey'}, 'optionValueKey')}
        optionNameKey={select('optionNameKey', {optionNameKey: 'optionNameKey'}, 'optionNameKey')}
        optionKey={select('optionKey', {optionKey: 'optionKey'}, 'optionKey')}
        label={text('label', 'label')}
        errorMessage={text('errorMessage', '')}
        size={select('size', sizes, 'compact')}
        mode={select('mode', modes, '')}
        removable={boolean('removable', true)}
        required={boolean('required', false)}
        enabled={boolean('enabled', true)}
        isFocused={boolean('isFocused', false)}
        {...actions}
      />
    </>
  ));
}