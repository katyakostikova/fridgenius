import { FC } from 'react';
import { Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { Text } from './text';

type PillProps = {
  label: string;
  onPress?: () => void;
  className?: string;
  labelClassName?: string;
};

const Pill: FC<PillProps> = ({ label, onPress, className, labelClassName }) => {
  const baseClass = twMerge(
    'rounded-full bg-neutral100/50 px-4 py-2 active:opacity-70',
    className,
  );

  const renderText = () => {
    return (
      <Text
        variants={{ size: 'sm', weight: 'semiBold' }}
        className={labelClassName}
      >
        {label}
      </Text>
    );
  };

  if (onPress) {
    return (
      <Pressable className={baseClass} onPress={onPress}>
        {renderText()}
      </Pressable>
    );
  }

  return <View className={baseClass}>{renderText()}</View>;
};

export { Pill };
