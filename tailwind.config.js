import { platformSelect } from 'nativewind/theme';

import { AppColor } from './src/common/enums';

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
        primary25: AppColor.PRIMARY_25,
        primary50: AppColor.PRIMARY_50,
        primary100: AppColor.PRIMARY_100,
        primary200: AppColor.PRIMARY_200,
        primary300: AppColor.PRIMARY_300,
        primary400: AppColor.PRIMARY_400,
        primary500: AppColor.PRIMARY_500,
        primary600: AppColor.PRIMARY_600,
        primary700: AppColor.PRIMARY_700,
        primary800: AppColor.PRIMARY_800,
        primary900: AppColor.PRIMARY_900,
        primaryOn: AppColor.PRIMARY_ON,

        secondary25: AppColor.SECONDARY_25,
        secondary50: AppColor.SECONDARY_50,
        secondary100: AppColor.SECONDARY_100,
        secondary200: AppColor.SECONDARY_200,
        secondary300: AppColor.SECONDARY_300,
        secondary400: AppColor.SECONDARY_400,
        secondary500: AppColor.SECONDARY_500,
        secondary600: AppColor.SECONDARY_600,
        secondary700: AppColor.SECONDARY_700,
        secondary800: AppColor.SECONDARY_800,
        secondary900: AppColor.SECONDARY_900,
        secondaryOn: AppColor.SECONDARY_ON,

        tertiary25: AppColor.TERTIARY_25,
        tertiary50: AppColor.TERTIARY_50,
        tertiary100: AppColor.TERTIARY_100,
        tertiary200: AppColor.TERTIARY_200,
        tertiary300: AppColor.TERTIARY_300,
        tertiary400: AppColor.TERTIARY_400,
        tertiary500: AppColor.TERTIARY_500,
        tertiary600: AppColor.TERTIARY_600,
        tertiary700: AppColor.TERTIARY_700,
        tertiary800: AppColor.TERTIARY_800,
        tertiary900: AppColor.TERTIARY_900,
        tertiaryOn: AppColor.TERTIARY_ON,

        error500: AppColor.ERROR_500,

        neutral25: AppColor.NEUTRAL_25,
        neutral50: AppColor.NEUTRAL_50,
        neutral100: AppColor.NEUTRAL_100,
        neutral200: AppColor.NEUTRAL_200,
        neutral300: AppColor.NEUTRAL_300,
        neutral400: AppColor.NEUTRAL_400,
        neutral500: AppColor.NEUTRAL_500,
        neutral600: AppColor.NEUTRAL_600,
        neutral700: AppColor.NEUTRAL_700,
        neutral800: AppColor.NEUTRAL_800,
        neutral900: AppColor.NEUTRAL_900,
        neutralOn: AppColor.NEUTRAL_ON,
      },
    },
  },
  plugins: [],
};
