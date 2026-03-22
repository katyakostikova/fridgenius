import { FC } from 'react';
import { View, ViewProps } from 'react-native';

import { cn } from 'helpers';

import { Switch } from './switch';
import { Text } from './text';

type LabeledSwitchProps = {
  value: boolean | undefined | null;
  onValueChange: (value: boolean) => void;
  label: string;
  description?: string;
} & Omit<ViewProps, 'children'>;

const LabeledSwitch: FC<LabeledSwitchProps> = ({
  value,
  onValueChange,
  label,
  description,
  className,
  ...props
}) => {
  return (
    <View
      className={cn('flex-row items-center justify-between gap-3', className)}
      {...props}
    >
      <View className="flex-1 pr-2">
        <Text variants={{ weight: 'semiBold' }}>{label}</Text>
        {description ? (
          <Text className="mt-1" variants={{ size: 'sm' }}>
            {description}
          </Text>
        ) : null}
      </View>
      <Switch value={!!value} onValueChange={onValueChange} />
    </View>
  );
};

export { LabeledSwitch };
