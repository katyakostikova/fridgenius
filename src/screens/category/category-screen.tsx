import { FC, useLayoutEffect } from 'react';
import { ScrollView, View } from 'react-native';

import { CategoryScreenProps } from 'common/types';
import {
  Button,
  Input,
  ScreenWrapper,
  Pill,
  Text,
  FormField,
} from 'components';
import { I18nAppText } from 'services';

import { ColorSelector } from './components/color-selector';
import { IconSelector } from './components/icon-selector';
import {
  CATEGORY_FORM_COLORS,
  CATEGORY_FORM_ICONS,
  QUICK_SUGGESTION_KEYS,
} from './constants';
import { useCategoryForm } from './hooks/category-form';

const CategoryScreen: FC<CategoryScreenProps> = ({ route, navigation }) => {
  const { categoryId } = route.params ?? {};
  const {
    error,
    name,
    iconName,
    color,
    handleSaveCategory,
    isEditScreen,
    validateNameOnBlur,
    setName,
    setIconName,
    setColor,
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
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Text className="mb-[20px] text-neutral700" variants={{ size: 'md' }}>
          {I18nAppText.t('categoryHelpIntro')}
        </Text>

        <View className="mb-6 rounded-2xl bg-neutral25 p-4 shadow-sm shadow-primary500/30 gap-6">
          <FormField label={I18nAppText.t('categoryName')} error={error}>
            <Input
              value={name}
              onChangeText={setName}
              onEndEditing={validateNameOnBlur}
              placeholder={I18nAppText.t('categoryNamePlaceholder')}
            />
          </FormField>
          <FormField label={I18nAppText.t('chooseIcon')}>
            <View className="flex-row flex-wrap gap-3">
              {CATEGORY_FORM_ICONS.map((icon) => {
                const isSelected = iconName === icon;

                return (
                  <IconSelector
                    key={icon}
                    icon={icon}
                    isSelected={isSelected}
                    onSelect={setIconName}
                  />
                );
              })}
            </View>
          </FormField>

          <FormField label={I18nAppText.t('accentColor')}>
            <View className="flex-row flex-wrap gap-4">
              {CATEGORY_FORM_COLORS.map((colorOption) => {
                const isSelected = color === colorOption;

                return (
                  <ColorSelector
                    key={colorOption}
                    colorOption={colorOption}
                    isSelected={isSelected}
                    onSelect={setColor}
                  />
                );
              })}
            </View>
          </FormField>

          <Button
            variant="filled"
            color="primary"
            title={I18nAppText.t('saveCategory')}
            onPress={handleSaveCategory}
          />
        </View>

        <Text variants={{ type: 'label' }} className="mb-4 text-center ">
          {I18nAppText.t('quickSuggestions')}
        </Text>
        <View className="flex-row flex-wrap justify-center gap-2">
          {QUICK_SUGGESTION_KEYS.map((key) => (
            <Pill
              key={key}
              label={I18nAppText.t(key)}
              onPress={() => setName(I18nAppText.t(key))}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { CategoryScreen };
