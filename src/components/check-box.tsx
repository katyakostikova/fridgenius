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
        className="p-2 bg-secondary500 rounded-sm active:bg-secondary600"
      >
        {value && <Icon name="check" color={AppColor.NEUTRAL_50} />}
      </Pressable>
      <Text variants={{ type: 'label' }}>{label}</Text>
    </View>
  );
};

export { CheckBox };
