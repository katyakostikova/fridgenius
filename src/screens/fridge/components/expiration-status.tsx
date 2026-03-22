import { FC, useMemo } from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { Pill, Text } from 'components';

import { getExpirationStatusStyle } from '../helpers';

type ExpirationStatusProps = {
  expDate: string | null | undefined;
};

const ExpirationStatus: FC<ExpirationStatusProps> = ({ expDate }) => {
  const expirationStatusStyle = useMemo(
    () => getExpirationStatusStyle(expDate),
    [expDate],
  );

  if (!expirationStatusStyle) {
    return null;
  }

  return (
    <View className="items-end">
      <Text
        variants={{ size: 'sm', weight: 'bold' }}
        className={twMerge(
          'uppercase tracking-wide',
          expirationStatusStyle.theme.statusLabelClassName,
        )}
      >
        {expirationStatusStyle.label}
      </Text>
      <Pill
        label={expirationStatusStyle.badgeText}
        className={twMerge(
          'mt-1 px-2 py-1',
          expirationStatusStyle.theme.pillClassName,
        )}
        labelClassName={expirationStatusStyle.theme.pillLabelClassName}
      />
    </View>
  );
};

export { ExpirationStatus };
