import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { FC } from 'react';
import { Text } from 'react-native';

import { FridgeScreenProps } from 'common/types';
import { categoriesService } from 'services';

const FridgeScreen: FC<FridgeScreenProps> = () => {
  const { data } = useLiveQuery(categoriesService.getAll());

  return <Text>{data.length}</Text>;
};

export { FridgeScreen };
