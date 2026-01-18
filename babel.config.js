module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
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
          },
        },
      ],
    ],
  };
};
