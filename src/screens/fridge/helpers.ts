import dayjs from 'dayjs';

import { DateFormat, ItemStatus } from 'common/enums';
import { CategoryWithItems } from 'common/types';
import { I18nAppText } from 'services';

import { EXPIRATION_THEME } from './constants';
import { ExpirationStatus, Section } from './types';

const getSectionListData = (categories: CategoryWithItems[]): Section[] => {
  return categories.map((category) => ({
    id: category.id,
    title: category.name,
    iconName: category.iconName,
    color: category.color,
    data: category.items,
  }));
};

const getExpirationStatus = (
  expDate: string | null | undefined,
): ExpirationStatus | null => {
  if (!expDate) {
    return null;
  }

  const parsed = dayjs(expDate, DateFormat.DATE_ONLY, true);

  const today = dayjs().startOf('day');
  const expStart = parsed.startOf('day');
  const daysUntil = expStart.diff(today, 'day');

  if (daysUntil < 0) {
    return { kind: 'expired', daysUntil };
  }

  if (daysUntil === 0) {
    return { kind: 'critical', daysUntil };
  }

  if (daysUntil === 1 || daysUntil === 2) {
    return { kind: 'warning', daysUntil };
  }

  return { kind: 'normal', daysUntil };
};

const getExpirationStatusStyle = (expDate: string | null | undefined) => {
  const expiration = getExpirationStatus(expDate);

  if (!expiration) {
    return null;
  }

  let labelKey: string;
  let badgeText: string;

  switch (expiration.kind) {
    case ItemStatus.EXPIRED:
      badgeText = I18nAppText.t('fridgeExpLabelExpired');
      labelKey = 'fridgeExpLabelCritical';
      break;
    case ItemStatus.CRITICAL:
      badgeText = I18nAppText.t('fridgeExpBadgeToday');
      labelKey = 'fridgeExpLabelCritical';
      break;
    case ItemStatus.WARNING:
      if (expiration.daysUntil === 1) {
        badgeText = I18nAppText.t('fridgeExpBadgeTomorrow');
      } else {
        badgeText = I18nAppText.t('fridgeExpBadgeInDays', {
          count: expiration.daysUntil,
        });
      }
      labelKey = 'fridgeExpLabelWarning';
      break;
    case ItemStatus.NORMAL:
      badgeText = I18nAppText.t('fridgeExpBadgeInDays', {
        count: expiration.daysUntil,
      });
      labelKey = 'fridgeExpLabelExpires';
      break;
    default:
      return null;
  }

  return {
    label: I18nAppText.t(labelKey),
    badgeText,
    theme: EXPIRATION_THEME[expiration.kind],
  };
};

const getDateAddedLabel = (
  dateAdded: string | null | undefined,
): string | null => {
  if (!dateAdded) {
    return null;
  }

  const parsed = dayjs(dateAdded, DateFormat.DATE_ONLY);

  const today = dayjs().startOf('day');
  const startOfDay = parsed.startOf('day');
  const diffDays = today.diff(startOfDay, 'day');

  switch (true) {
    case diffDays <= 0:
      return I18nAppText.t('fridgeDateAddedToday');
    case diffDays === 1:
      return I18nAppText.t('fridgeDateAddedYesterday');
    case diffDays < 7:
      return I18nAppText.t('fridgeDateAddedDaysAgo', { count: diffDays });
    case diffDays < 30: {
      const weeks = Math.floor(diffDays / 7);

      return weeks === 1
        ? I18nAppText.t('fridgeDateAddedOneWeekAgo')
        : I18nAppText.t('fridgeDateAddedWeeksAgo', { count: weeks });
    }
    case diffDays < 365: {
      const months = today.diff(startOfDay, 'month');
      const monthCount = Math.max(1, months);

      return monthCount === 1
        ? I18nAppText.t('fridgeDateAddedOneMonthAgo')
        : I18nAppText.t('fridgeDateAddedMonthsAgo', { count: monthCount });
    }
    default: {
      const years = today.diff(startOfDay, 'year');

      return years === 1
        ? I18nAppText.t('fridgeDateAddedOneYearAgo')
        : I18nAppText.t('fridgeDateAddedYearsAgo', { count: years });
    }
  }
};

export { getDateAddedLabel, getExpirationStatusStyle, getSectionListData };
