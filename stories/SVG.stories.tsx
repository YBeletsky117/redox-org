import React from 'react';
import { Platform } from 'react-native';
import { color, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { SVG } from '../lib';
import { CenterView } from './CenterView';

const spinner = {left: 'left', right: 'right'};
const directions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
}

if (Platform.OS === 'web') {
  storiesOf('SVG components', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('PlusSVG', args => <SVG.PlusSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'grey' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
    },
  })
  .add('ArrowSVG', args => <SVG.ArrowSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'grey' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
      direction: { control: { type: 'inline-radio', options: Object.values(directions) }, name: 'direction', defaultValue: 'right' },
    },
  })
  .add('ArrowLineSVG', args => <SVG.ArrowLineSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'grey' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
      direction: { control: { type: 'inline-radio', options: Object.values(directions) }, name: 'direction', defaultValue: 'right' },
    },
  })
  .add('EyeOffSVG', args => <SVG.EyeOffSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'grey' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
    },
  })
  .add('EyeOnSVG', args => <SVG.EyeOnSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'grey' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
    },
  })
  .add('ImageSVG', args => <SVG.ImageSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'grey' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
    },
  })
  .add('SpinnerSVG', args => <SVG.SpinnerSVG {...args} />, {
    argTypes: {
      rotation: { control: { type: 'inline-radio', options: Object.values(spinner) }, name: 'rotation', defaultValue: 'right' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
    },
  })
  .add('StopSVG', args => <SVG.StopSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'red' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
    },
  })
  .add('WifiOffSVG', args => <SVG.WifiOffSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'grey' },
      colorLine: { control: { type: 'color' }, name: 'colorLine', defaultValue: 'black' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
    },
  })
  .add('WifiOnSVG', args => <SVG.WifiOnSVG {...args} />, {
    argTypes: {
      color: { control: { type: 'color' }, name: 'color', defaultValue: 'grey' },
      size: { control: { type: 'range', min: 8, max: 200, step: 1 }, name: 'size', defaultValue: 50 },
    },
  });
} else {
  storiesOf('SVG', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('PlusSVG', () => (
    <SVG.PlusSVG
      color={color('color', 'grey')}
      size={number('size', 50, { range: true, min: 8, max: 200, step: 1 })}
    />
  ))
  .add('ArrowSVG', () => (
    <SVG.ArrowSVG
      color={color('color', 'grey')}
      size={number('size', 50, { range: true, min: 8, max: 200, step: 1 })}
      direction={select('direction', directions, 'right')}
    />
  ))
  .add('SpinnerSVG', () => (
    <SVG.SpinnerSVG
      rotation={select('rotation', spinner, 'right')}
      size={number('size', 50, { range: true, min: 8, max: 200, step: 1 })}
    />
  ))
  .add('StopSVG', () => (
    <SVG.StopSVG
      color={color('color', 'red')}
      size={number('size', 50, { range: true, min: 8, max: 200, step: 1 })}
    />
  ));
}