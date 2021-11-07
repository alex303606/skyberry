module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@interfaces': './src/interfaces/index.ts',
          '@screens': './src/screens/index.ts',
          '@actions': './src/store/actions/index.ts',
          '@components': './src/components/index.ts',
          '@navigators': './src/navigators/index.ts',
          '@config': './src/config/index.ts',
          '@hooks': './src/hooks/index.ts',
          '^@assets/(.+)': './assets/\\1',
          '@utils': './src/utils/index.ts',
        },
      },
    ],
    'react-native-reanimated/plugin',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
    development: {
      plugins: ['babel-plugin-styled-components'],
    },
  },
};
