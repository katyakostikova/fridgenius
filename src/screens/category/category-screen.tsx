import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { Button, ScrollView, Text, TextInput } from 'react-native';

import { CategoryScreenProps } from 'common/types';
import { ScreenWrapper } from 'components';
import { categoriesService, I18nAppText } from 'services';

const CategoryScreen: FC<CategoryScreenProps> = ({ route, navigation }) => {
  const { categoryId } = route.params ?? {};
  const isEditScreen = !!categoryId;

  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { data } = useLiveQuery(categoriesService.getById(categoryId ?? -1));
  const trimmedName = name.trim();

  const goBack = () => {
    navigation.goBack();
  };

  const validateInput = async () => {
    let error = null;

    if (trimmedName.length === 0) {
      error = 'Category name cannot be empty';
      setError(error);
      return error;
    }

    const existingCategories = await categoriesService.getByName(trimmedName);

    if (existingCategories.length > 0) {
      error = 'Category name already exists';
      setError(error);
      return error;
    }

    setError(error);
    return error;
  };

  // TODO: move to hook
  const handleSaveCategory = async () => {
    const error = await validateInput();

    if (error) {
      return;
    }

    // TODO: toast message if error occurs
    if (isEditScreen) {
      await categoriesService.update({ id: categoryId, name: trimmedName });
    } else {
      await categoriesService.create(trimmedName);
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
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text>Category</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          onEndEditing={validateInput}
        />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <Button title={I18nAppText.t('save')} onPress={handleSaveCategory} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export { CategoryScreen };
