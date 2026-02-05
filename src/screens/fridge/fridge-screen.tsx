import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { FC, useCallback, useMemo } from 'react';
import { FlatList, Text } from 'react-native';

import { ScreenName } from 'common/enums';
import { FridgeScreenProps, IconName } from 'common/types';
import { FabWithOptions, ScreenWrapper } from 'components';
import { categoriesService, I18nAppText } from 'services';

const FridgeScreen: FC<FridgeScreenProps> = ({ navigation }) => {
  const { data: categories } = useLiveQuery(
    categoriesService.getAllWithItems(),
  );

  const handleNavigateToCategoryScreen = useCallback(
    (categoryId?: number) => {
      navigation.navigate(ScreenName.CATEGORY_SCREEN, { categoryId });
    },
    [navigation],
  );

  const handleNavigateToItemScreen = useCallback(
    (itemId?: number) => {
      navigation.navigate(ScreenName.ITEM_SCREEN, { itemId });
    },
    [navigation],
  );

  const fabOptions = useMemo(
    () => [
      {
        name: I18nAppText.t('addCategory'),
        iconName: 'format-list-bulleted' as IconName,
        onPress: () => handleNavigateToCategoryScreen(),
      },
      {
        name: I18nAppText.t('addItem'),
        iconName: 'food-apple' as IconName,
        onPress: () => handleNavigateToItemScreen(),
      },
    ],
    [handleNavigateToCategoryScreen, handleNavigateToItemScreen],
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
