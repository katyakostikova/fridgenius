import { platformSelect } from 'nativewind/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.ts',
    './app.tsx',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/navigation/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        nunito: platformSelect({
          ios: 'Nunito-Regular',
          android: 'Nunito_400Regular',
        }),
        'nunito-medium': platformSelect({
          ios: 'Nunito-SemiBold',
          android: 'Nunito_600SemiBold',
        }),
        'nunito-semi-bold': platformSelect({
          ios: 'Nunito-SemiBold',
          android: 'Nunito_600SemiBold',
        }),
        'nunito-bold': platformSelect({
          ios: 'Nunito-Bold',
          android: 'Nunito_700Bold',
        }),
      },
    },
  },
  plugins: [],
};
