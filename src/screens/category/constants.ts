import { AppColor } from 'common/enums';
import type { IconName } from 'common/types';

const CATEGORY_FORM_ICONS: IconName[] = [
  'leaf',
  'food-apple',
  'food-croissant',
  'ice-cream',
  'food-drumstick',
  'fridge-top',
  'food-takeout-box',
  'cup',
  'egg',
  'candy',
];

const CATEGORY_FORM_COLORS = [
  AppColor.PRIMARY_500,
  AppColor.SECONDARY_500,
  AppColor.TERTIARY_600,
  AppColor.SUCCESS_500,
  AppColor.ERROR_500,
  AppColor.PURPLE_500,
] as const;

const QUICK_SUGGESTION_KEYS = [
  'suggestionFruits',
  'suggestionVegetables',
  'suggestionMeatFish',
  'suggestionDairy',
  'suggestionFrozen',
] as const;

export { CATEGORY_FORM_COLORS, CATEGORY_FORM_ICONS, QUICK_SUGGESTION_KEYS };
