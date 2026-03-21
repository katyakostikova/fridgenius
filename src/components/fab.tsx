import { FC, useEffect } from 'react';
import { Pressable, PressableProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AppColor } from 'common/enums';

import { Icon } from './icon';

type FabProps = {
  onPress: () => void;
  isOpen?: boolean;
} & PressableProps;

const Fab: FC<FabProps> = ({
  onPress,
  className,
  isOpen = false,
  ...props
}) => {
  const rotationDeg = useSharedValue(0);

  useEffect(() => {
    rotationDeg.value = withTiming(isOpen ? 45 : 0, { duration: 300 });
  }, [isOpen, rotationDeg]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationDeg.value}deg` }],
  }));

  return (
    <Pressable
      onPress={onPress}
      className={`h-20 w-20 items-center justify-center rounded-[20px] bg-secondary500 shadow-md active:opacity-70 ${className ?? ''}`}
      {...props}
    >
      <Animated.View style={iconStyle}>
        <Icon name="plus" color={AppColor.NEUTRAL_ON} size={35} />
      </Animated.View>
    </Pressable>
  );
};

export { Fab };
