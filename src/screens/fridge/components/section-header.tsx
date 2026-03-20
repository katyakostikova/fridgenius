import { FC, useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Item } from 'common/types';
import { Text, Icon } from 'components';

type SectionHeaderProps = {
  title: string;
  isExpanded: boolean;
  data: Item[];
  onPress: () => void;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  isExpanded,
  data,
  onPress,
}) => {
  const amountOfItems = data.length;
  const rotation = useSharedValue(isExpanded ? 180 : 0);

  useEffect(() => {
    rotation.value = withTiming(isExpanded ? 180 : 0, { duration: 220 });
  }, [isExpanded, rotation]);

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <Pressable onPress={onPress} className="flex-row items-center">
      <Animated.View style={chevronStyle}>
        <Icon name="chevron-down" size={24} />
      </Animated.View>
      <Text variants={{ size: 'lg', weight: 'medium' }} className="ml-2">
        {title}
      </Text>
      <Text variants={{ size: 'lg', weight: 'medium' }} className="ml-2">
        ({amountOfItems})
      </Text>
    </Pressable>
  );
};

export { SectionHeader };
