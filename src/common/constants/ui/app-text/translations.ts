import { LanguageTag } from 'common/enums';

import {
  NAVIGATION_TEXT_ENGLISH,
  NAVIGATION_TEXT_UKRAINIAN,
} from './navigation';

const TRANSLATIONS = {
  [LanguageTag.ENGLISH]: {
    ...NAVIGATION_TEXT_ENGLISH,
  },
  [LanguageTag.UKRAINIAN]: {
    ...NAVIGATION_TEXT_UKRAINIAN,
  },
};

export { TRANSLATIONS };
