import { ComponentProps } from 'react';

import { Icon } from 'components';

type IconName = ComponentProps<typeof Icon>['name'];

export type { IconName };
