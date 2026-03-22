import { FC } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { Item } from 'common/types';
import { Text } from 'components';

import { ExpirationStatus } from './expiration-status';

type ListItemProps = {
  item: Item;
};

const ListItem: FC<ListItemProps> = ({ item }) => {
  const { name, quantity, unitOfMeasure, expDate } = item;

  return (
    <Animated.View entering={FadeInUp.duration(300)}>
      <Pressable className="my-2 flex-row items-center rounded-2xl bg-neutralOn p-3 shadow-sm shadow-primary500/10">
        <View className="flex-1 pr-3">
          <Text variants={{ size: 'lg', weight: 'semiBold' }} numberOfLines={1}>
            {name}
          </Text>
          <Text variants={{ color: 'neutral600', size: 'sm' }} className="mt-1">
            {quantity} {unitOfMeasure}
          </Text>
        </View>
        <ExpirationStatus expDate={expDate} />
      </Pressable>
    </Animated.View>
  );
};

export { ListItem };
