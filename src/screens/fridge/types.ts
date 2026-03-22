import { Item } from 'common/types';

type Section = {
  id: number;
  title: string;
  iconName: string;
  color: string;
  data: Item[];
};

type ExpirationStatusKind = 'expired' | 'critical' | 'warning' | 'normal';

type ExpirationStatus = {
  kind: ExpirationStatusKind;
  daysUntil: number;
};

export type { ExpirationStatus, ExpirationStatusKind, Section };
