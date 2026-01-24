import { LanguageTag } from 'common/enums';

import { ACTIONS_TEXT_ENGLISH, ACTIONS_TEXT_UKRAINIAN } from './actions';
import { ERRORS_TEXT_ENGLISH, ERRORS_TEXT_UKRAINIAN } from './errors';
import { LABELS_TEXT_ENGLISH, LABELS_TEXT_UKRAINIAN } from './labels';
import {
  NAVIGATION_TEXT_ENGLISH,
  NAVIGATION_TEXT_UKRAINIAN,
} from './navigation';

const TRANSLATIONS = {
  [LanguageTag.ENGLISH]: {
    ...NAVIGATION_TEXT_ENGLISH,
    ...ACTIONS_TEXT_ENGLISH,
    ...LABELS_TEXT_ENGLISH,
    ...ERRORS_TEXT_ENGLISH,
  },
  [LanguageTag.UKRAINIAN]: {
    ...NAVIGATION_TEXT_UKRAINIAN,
    ...ACTIONS_TEXT_UKRAINIAN,
    ...LABELS_TEXT_UKRAINIAN,
    ...ERRORS_TEXT_UKRAINIAN,
  },
};

export { TRANSLATIONS };
