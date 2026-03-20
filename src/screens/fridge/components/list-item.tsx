import { FC } from 'react';
import { Pressable } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

import { Item } from 'common/types';
import { Text } from 'components';

type ListItemProps = {
  item: Item;
};

const ListItem: FC<ListItemProps> = ({ item }) => {
  const { name, quantity, unitOfMeasure } = item;

  return (
    <Animated.View
      entering={FadeInUp.duration(300)}
      exiting={FadeOutUp.duration(300)}
    >
      <Pressable className="py-2 pl-2 flex-row items-center">
        <Text>{name}</Text>
        <Text variants={{ color: 'neutral600' }} className="ml-2">
          {quantity} {unitOfMeasure}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export { ListItem };
