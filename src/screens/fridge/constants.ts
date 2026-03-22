import { ItemStatus } from 'common/enums';

const EXPIRATION_THEME = {
  [ItemStatus.EXPIRED]: {
    statusLabelClassName: 'text-purple500',
    pillClassName: 'bg-purple500/15',
    pillLabelClassName: 'text-purple500',
  },
  [ItemStatus.CRITICAL]: {
    statusLabelClassName: 'text-error500',
    pillClassName: 'bg-error500',
    pillLabelClassName: 'text-neutralOn',
  },
  [ItemStatus.WARNING]: {
    statusLabelClassName: 'text-error500/70',
    pillClassName: 'bg-error500/15',
    pillLabelClassName: 'text-error500',
  },
  [ItemStatus.NORMAL]: {
    statusLabelClassName: 'text-neutral600',
    pillClassName: 'bg-neutral50',
    pillLabelClassName: 'text-neutral900',
  },
} as const;

export { EXPIRATION_THEME };
