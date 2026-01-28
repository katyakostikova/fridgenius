import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { FC, useCallback, useMemo } from 'react';
import { FlatList, Text } from 'react-native';

import { ScreenName } from 'common/enums';
import { FridgeScreenProps, IconName } from 'common/types';
import { FabWithOptions, ScreenWrapper } from 'components';
import { categoriesService } from 'services';

const FridgeScreen: FC<FridgeScreenProps> = ({ navigation }) => {
  const { data: categories } = useLiveQuery(categoriesService.getAll());

  const handleNavigateToCategoryScreen = useCallback(
    (categoryId?: number) => {
      navigation.navigate(ScreenName.CATEGORY_SCREEN, { categoryId });
    },
    [navigation],
  );

  const fabOptions = useMemo(
    () => [
      {
        name: 'Add Category',
        iconName: 'format-list-bulleted' as IconName,
        onPress: () => handleNavigateToCategoryScreen(),
      },
      {
        name: 'Add Item',
        iconName: 'food-apple' as IconName,
        onPress: () => {
          // TODO: add item screen
        },
      },
    ],
    [handleNavigateToCategoryScreen],
  );

  return (
    <ScreenWrapper>
      <FlatList
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <FabWithOptions
        options={fabOptions}
        className="absolute right-3 bottom-3"
      />
    </ScreenWrapper>
  );
};

export { FridgeScreen };
