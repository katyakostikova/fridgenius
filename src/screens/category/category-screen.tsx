import { FC, useLayoutEffect } from 'react';
import { ScrollView, View } from 'react-native';

import { CategoryScreenProps } from 'common/types';
import { Input, ScreenWrapper, Text, Button } from 'components';
import { I18nAppText } from 'services';

import { useCategoryForm } from './hooks/category-form';

const CategoryScreen: FC<CategoryScreenProps> = ({ route, navigation }) => {
  const { categoryId } = route.params ?? {};
  const {
    error,
    name,
    handleSaveCategory,
    isEditScreen,
    validateInput,
    setName,
  } = useCategoryForm({ categoryId });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditScreen
        ? I18nAppText.t('editCategoryScreenName')
        : I18nAppText.t('addCategoryScreenName'),
    });
  }, [isEditScreen, navigation]);

  return (
    <ScreenWrapper>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="mb-3">
          <Text className="mb-2" variants={{ type: 'label' }}>
            {I18nAppText.t('category')}
          </Text>
          <Input
            className="mb-2"
            value={name}
            onChangeText={setName}
            onEndEditing={validateInput}
          />
          {error && <Text variants={{ color: 'error' }}>{error}</Text>}
        </View>
        <Button
          type="filled"
          title={I18nAppText.t('save')}
          onPress={handleSaveCategory}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export { CategoryScreen };
