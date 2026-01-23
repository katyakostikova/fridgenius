import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { FC } from 'react';
import { FlatList, Text } from 'react-native';

import { ScreenName } from 'common/enums';
import { FridgeScreenProps } from 'common/types';
import { Fab, ScreenWrapper } from 'components';
import { categoriesService } from 'services';

const FridgeScreen: FC<FridgeScreenProps> = ({ navigation }) => {
  const { data: categories } = useLiveQuery(categoriesService.getAll());

  const handleNavigateToCategoryScreen = (categoryId?: number) => {
    navigation.navigate(ScreenName.CATEGORY_SCREEN, { categoryId });
  };

  return (
    <ScreenWrapper>
      <FlatList
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <Fab
        onPress={() => handleNavigateToCategoryScreen()}
        className="absolute right-3 bottom-3"
      />
    </ScreenWrapper>
  );
};

export { FridgeScreen };
