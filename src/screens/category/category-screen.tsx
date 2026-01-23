import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { Button, Text, TextInput } from 'react-native';

import { CategoryScreenProps } from 'common/types';
import { ScreenWrapper } from 'components';
import { categoriesService, I18nAppText } from 'services';

const CategoryScreen: FC<CategoryScreenProps> = ({ route, navigation }) => {
  const { categoryId } = route.params ?? {};
  const isEditScreen = !!categoryId;

  const [name, setName] = useState('');
  const { data } = useLiveQuery(categoriesService.getById(categoryId ?? -1));

  const goBack = () => {
    navigation.goBack();
  };

  const handleSaveCategory = () => {
    // TODO: add validation
    if (isEditScreen) {
      categoriesService.update({ id: categoryId, name });
    } else {
      categoriesService.create(name);
    }

    goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditScreen
        ? I18nAppText.t('editCategoryScreenName')
        : I18nAppText.t('addCategoryScreenName'),
    });
  }, [isEditScreen, navigation]);

  // TODO: add loading state component
  useEffect(() => {
    if (data && data.length > 0) {
      setName(data[0].name);
    }
  }, [data]);

  return (
    <ScreenWrapper>
      <Text>Category</Text>
      <TextInput value={name} onChangeText={setName} />
      <Button title={I18nAppText.t('save')} onPress={handleSaveCategory} />
    </ScreenWrapper>
  );
};

export { CategoryScreen };
