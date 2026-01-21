module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            assets: './src/assets',
            common: './src/common',
            components: './src/components',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
            services: './src/services',
          },
        },
      ],
    ],
  };
};
