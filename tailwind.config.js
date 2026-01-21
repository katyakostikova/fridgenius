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
      colors: {
        primary50: '#EDF6FF',
        primary100: '#D9EBFF',
        primary200: '#B3D7FF',
        primary300: '#86BDFF',
        primary400: '#4F9EFF',
        primary500: '#1E78FF',
        primary600: '#165FD6',
        primary700: '#0F47AD',
        primary800: '#0A2F7A',

        secondary100: '#E6FCFF',
        secondary200: '#C2F6FF',
        secondary300: '#8DEEFF',
        secondary400: '#4FE0F5',
        secondary500: '#22C7E6',

        success500: '#2ECC71',
        warning500: '#F4C430',
        error500: '#E74C3C',

        neutral50: '#F9FAFB',
        neutral100: '#F1F3F5',
        neutral200: '#E1E4E8',
        neutral300: '#C9CDD3',
        neutral400: '#9AA0A6',
        neutral500: '#6B7280',
        neutral600: '#4B5563',
        neutral700: '#374151',
        neutral800: '#1F2937',
        neutral900: '#111827',
      },
    },
  },
  plugins: [],
};
