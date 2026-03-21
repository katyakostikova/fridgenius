import { FC } from 'react';
import { Pressable, View } from 'react-native';

import { cn } from 'helpers';

import { Text } from './text';

type PillProps = {
  label: string;
  onPress?: () => void;
  className?: string;
};

const Pill: FC<PillProps> = ({ label, onPress, className }) => {
  const baseClass = 'rounded-full bg-neutral100/50 px-4 py-2 active:opacity-70';

  const renderText = () => {
    return <Text variants={{ size: 'sm', weight: 'semiBold' }}>{label}</Text>;
  };

  if (onPress) {
    return (
      <Pressable className={cn(baseClass, className)} onPress={onPress}>
        {renderText()}
      </Pressable>
    );
  }

  return <View className={cn(baseClass, className)}>{renderText()}</View>;
};

export { Pill };
