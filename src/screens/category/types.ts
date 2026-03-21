import { CATEGORY_FORM_COLORS, CATEGORY_FORM_ICONS } from './constants';

type CategoryFormIcon = (typeof CATEGORY_FORM_ICONS)[number];
type CategoryFormColor = (typeof CATEGORY_FORM_COLORS)[number];

export type { CategoryFormColor, CategoryFormIcon };
