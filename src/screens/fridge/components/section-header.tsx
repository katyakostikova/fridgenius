import { FC, useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { IconName, Item } from 'common/types';
import { Text, Icon } from 'components';

type SectionHeaderProps = {
  title: string;
  iconName: string;
  color: string;
  isExpanded: boolean;
  data: Item[];
  onPress: () => void;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  iconName,
  color,
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
    <Pressable onPress={onPress} className="flex-row items-center py-2">
      <Icon
        name={iconName as IconName}
        size={25}
        color={color}
        className="mr-2"
      />
      <Text
        variants={{ size: 'lg', weight: 'extraBold' }}
        className="flex-1 uppercase tracking-wide"
        style={{ color }}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text variants={{ size: 'lg', weight: 'medium' }} className="mr-2">
        ({amountOfItems})
      </Text>
      <Animated.View style={chevronStyle}>
        <Icon name="chevron-down" size={24} />
      </Animated.View>
    </Pressable>
  );
};

export { SectionHeader };
