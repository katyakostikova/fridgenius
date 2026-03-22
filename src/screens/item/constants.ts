import { UnitOfMeasurement } from 'common/enums';
import { I18nAppText } from 'services';

const UNIT_OPTIONS = [
  {
    key: UnitOfMeasurement.PIECE,
    name: I18nAppText.t('piece'),
  },
  {
    key: UnitOfMeasurement.GRAM,
    name: I18nAppText.t('gram'),
  },
  {
    key: UnitOfMeasurement.KILOGRAM,
    name: I18nAppText.t('kilogram'),
  },
  {
    key: UnitOfMeasurement.LITER,
    name: I18nAppText.t('liter'),
  },
  {
    key: UnitOfMeasurement.MILLILITER,
    name: I18nAppText.t('milliliter'),
  },
];

export { UNIT_OPTIONS };
