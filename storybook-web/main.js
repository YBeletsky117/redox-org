const path = require('path');

module.exports = {
  stories: ['../stories/*.stories.@(tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-controls',
    'storybook-addon-designs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    'storybook-contrast',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      'react-native-error-boundary': 'react-native-web',
      'react-native-calendar-picker': 'react-native-web',
      // make sure we're rendering output using **web** Storybook not react-native
      '@storybook/react-native': '@storybook/react',
      // plugin-level react-native-web extensions
      'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
      // ... 
    };
    
    config.resolve.extensions = ['.web','.web.js', '.js', '.jsx', '.ts', '.tsx', '.mdx', '.json'];

    // mutate babel-loader
    config.module.rules[0].use[0].options.plugins.push([
      'react-native-web',
      { commonjs: true },
    ]);

    // console.dir(config, { depth: null });

    return config;
  },
};