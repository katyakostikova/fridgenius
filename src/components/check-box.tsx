import { FC } from 'react';
import { Pressable, View, ViewProps } from 'react-native';

import { AppColor } from 'common/enums';
import { cn } from 'helpers';

import { Icon } from './icon';
import { Text } from './text';

type InputProps = {
  value: boolean | undefined | null;
  label: string;
  onCheck: () => void;
} & ViewProps;

const CheckBox: FC<InputProps> = ({
  value = false,
  label,
  className,
  onCheck,
  ...props
}) => {
  return (
    <View className={cn('flex-row items-center', className)} {...props}>
      <Pressable
        onPress={onCheck}
        className={cn(
          'w-7 h-7 items-center justify-center bg-neutral50 rounded-md active:bg-neutral100 border border-neutral300 mr-2',
          value ? 'bg-secondary500 active:bg-secondary600 border-0' : '',
        )}
      >
        {value && <Icon name="check-bold" color={AppColor.NEUTRAL_ON} />}
      </Pressable>
      <Text variants={{ type: 'label' }}>{label}</Text>
    </View>
  );
};

export { CheckBox };
