import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { FC } from 'react';
import { Text, View } from 'react-native';

import { FridgeScreenProps } from 'common/types';
import { Fab } from 'components';
import { categoriesService } from 'services';

const FridgeScreen: FC<FridgeScreenProps> = () => {
  const { data } = useLiveQuery(categoriesService.getAll());

  return (
    <View className="flex-1 bg-primary50">
      <Text>Fridge Screen</Text>
      <Fab className="absolute right-3 bottom-3" onPress={() => {}} />
    </View>
  );
};

export { FridgeScreen };
