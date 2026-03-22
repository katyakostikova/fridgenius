import { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { Item } from 'common/types';
import { Pill, Text } from 'components';
import { I18nAppText } from 'services';

import { getDateAddedLabel } from '../helpers';
import { ExpirationStatus } from './expiration-status';

type ListItemProps = {
  item: Item;
};

const ListItem: FC<ListItemProps> = ({ item }) => {
  const { name, quantity, unitOfMeasure, expDate, dateAdded, isPermanent } =
    item;

  const dateAddedLabel = useMemo(
    () => getDateAddedLabel(dateAdded),
    [dateAdded],
  );

  return (
    <Animated.View entering={FadeInUp.duration(300)}>
      <Pressable className="my-2 flex-row items-center rounded-2xl bg-neutralOn p-3 shadow-sm shadow-primary500/10">
        <View className="flex-1 pr-3">
          <View className="flex-row items-center gap-3">
            <Text
              variants={{ size: 'lg', weight: 'semiBold' }}
              numberOfLines={1}
            >
              {name}
            </Text>
            {isPermanent ? (
              <Pill
                label={I18nAppText.t('fridgeItemPermanentBadge')}
                className="shrink-0 bg-secondary50 px-2 py-1"
                labelClassName="text-xs uppercase tracking-wide text-neutral800"
              />
            ) : null}
          </View>
          <Text variants={{ color: 'neutral600', size: 'sm' }} className="mt-1">
            {quantity} {unitOfMeasure}
            {dateAddedLabel ? ` \u2022 ${dateAddedLabel}` : ''}
          </Text>
        </View>
        <ExpirationStatus expDate={expDate} />
      </Pressable>
    </Animated.View>
  );
};

export { ListItem };
