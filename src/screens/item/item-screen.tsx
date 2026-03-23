import { FC, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { ItemScreenProps } from 'common/types';
import {
  Button,
  DatePickerInput,
  FormField,
  Input,
  LabeledSwitch,
  ScreenWrapper,
  Selector,
  TempQuantityInput,
  Text,
} from 'components';
import { checkIsIos } from 'helpers';
import { I18nAppText } from 'services';

import { UNIT_OPTIONS } from './constants';
import { useItemForm } from './hooks/use-item-form';

const IS_TEMP_QUANTITY_ENABLED = true;

const ItemScreen: FC<ItemScreenProps> = ({ route, navigation }) => {
  const { itemId } = route.params ?? {};
  const {
    categoryOptions,
    error,
    handleChangeCategory,
    handleChangeInput,
    handleChangeIsPermanent,
    handleChangeUnit,
    handleSaveItem,
    isEditScreen,
    item,
  } = useItemForm({ itemId });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditScreen
        ? I18nAppText.t('editItemScreenName')
        : I18nAppText.t('addItemScreenName'),
    });
  }, [isEditScreen, navigation]);

  const sectionSurfaceClass =
    'gap-4 rounded-xl bg-neutral25 mx-4 p-4 shadow-sm shadow-primary500/15';

  return (
    <ScreenWrapper>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <KeyboardAvoidingView
          behavior={checkIsIos() ? 'padding' : 'height'}
          className="flex-1 gap-6 "
        >
          <View>
            <Text
              className="mb-2 text-center"
              variants={{ size: '2xl', weight: 'bold' }}
            >
              {I18nAppText.t('preserveTheFreshness')}
            </Text>
            <Text className="text-center" variants={{ color: 'neutral600' }}>
              {I18nAppText.t('itemHelpIntro')}
            </Text>
          </View>

          <View className={sectionSurfaceClass}>
            <FormField label={I18nAppText.t('name')}>
              <Input
                onChangeText={(value) =>
                  handleChangeInput({ key: 'name', value })
                }
                value={item.name}
                placeholder={I18nAppText.t('itemNamePlaceholder')}
              />
            </FormField>
            {!IS_TEMP_QUANTITY_ENABLED ? (
              <FormField label={I18nAppText.t('quantity')}>
                <Input
                  onChangeText={(value) =>
                    handleChangeInput({ key: 'quantity', value })
                  }
                  value={String(item.quantity ?? 0)}
                  keyboardType="decimal-pad"
                  placeholder={I18nAppText.t('itemQuantityPlaceholder')}
                />
              </FormField>
            ) : (
              <TempQuantityInput
                currentQuantity={Number(item.quantity) || 0}
                onResultingQuantityChange={(value) =>
                  handleChangeInput({ key: 'quantity', value: String(value) })
                }
              />
            )}
            <FormField label={I18nAppText.t('unit')}>
              <Selector
                options={UNIT_OPTIONS}
                value={item.unitOfMeasure}
                onSelect={handleChangeUnit}
              />
            </FormField>
          </View>

          <View className={sectionSurfaceClass}>
            <FormField label={I18nAppText.t('category')}>
              <Selector
                options={categoryOptions}
                value={item.categoryId}
                onSelect={handleChangeCategory}
              />
            </FormField>
            <FormField label={I18nAppText.t('dateAdded')}>
              <DatePickerInput
                placeholder={I18nAppText.t('itemDatePlaceholder')}
                value={item.dateAdded}
                onChangeDate={(value) =>
                  handleChangeInput({ key: 'dateAdded', value })
                }
              />
            </FormField>
            <FormField label={I18nAppText.t('expDate')}>
              <DatePickerInput
                placeholder={I18nAppText.t('itemDatePlaceholder')}
                value={item.expDate}
                onChangeDate={(value) =>
                  handleChangeInput({ key: 'expDate', value })
                }
              />
            </FormField>
          </View>

          <View className={sectionSurfaceClass}>
            <LabeledSwitch
              description={I18nAppText.t('permanentShoppingListHint')}
              label={I18nAppText.t('shouldAlwaysBePresent')}
              value={item.isPermanent}
              onValueChange={handleChangeIsPermanent}
            />
          </View>

          {error ? <Text variants={{ color: 'error' }}>{error}</Text> : null}
          <Button
            variant="filled"
            color="primary"
            title={I18nAppText.t('saveItem')}
            onPress={handleSaveItem}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { ItemScreen };
