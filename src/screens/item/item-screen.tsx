import { FC, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { UnitOfMeasurement } from 'common/enums';
import { ItemScreenProps } from 'common/types';
import {
  Button,
  CheckBox,
  DatePickerInput,
  FormField,
  Input,
  ScreenWrapper,
  Selector,
  Text,
} from 'components';
import { checkIsIos } from 'helpers';
import { I18nAppText } from 'services';

import { useItemForm } from './hooks/item-form';

const UNIT_OPTIONS = [
  {
    key: UnitOfMeasurement.PIECE,
    name: I18nAppText.t('piece'),
  },
  {
    key: UnitOfMeasurement.GRAM,
    name: I18nAppText.t('gram'),
  },
  {
    key: UnitOfMeasurement.KILOGRAM,
    name: I18nAppText.t('kilogram'),
  },
  {
    key: UnitOfMeasurement.LITER,
    name: I18nAppText.t('liter'),
  },
  {
    key: UnitOfMeasurement.MILLILITER,
    name: I18nAppText.t('milliliter'),
  },
];

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

  return (
    <ScreenWrapper>
      <ScrollView bounces={false}>
        <KeyboardAvoidingView
          behavior={checkIsIos() ? 'padding' : 'height'}
          className="gap-4 flex-1"
        >
          <FormField label={I18nAppText.t('name')}>
            <Input
              onChangeText={(value) =>
                handleChangeInput({ key: 'name', value })
              }
              value={item.name}
            />
          </FormField>
          <View className="flex-row items-start justify-between gap-3">
            <FormField className="flex-1" label={I18nAppText.t('quantity')}>
              <Input
                onChangeText={(value) =>
                  handleChangeInput({ key: 'quantity', value })
                }
                value={String(item.quantity ?? 0)}
                keyboardType="decimal-pad"
              />
            </FormField>
            <FormField className="flex-1" label={I18nAppText.t('unit')}>
              <Selector
                options={UNIT_OPTIONS}
                value={item.unitOfMeasure}
                onSelect={handleChangeUnit}
              />
            </FormField>
          </View>
          <FormField label={I18nAppText.t('category')}>
            <Selector
              options={categoryOptions}
              value={item.categoryId}
              onSelect={handleChangeCategory}
            />
          </FormField>
          <FormField label={I18nAppText.t('dateAdded')}>
            <DatePickerInput
              value={item.dateAdded}
              onChangeDate={(value) =>
                handleChangeInput({ key: 'dateAdded', value })
              }
            />
          </FormField>
          <FormField label={I18nAppText.t('expDate')}>
            <DatePickerInput
              value={item.expDate}
              onChangeDate={(value) =>
                handleChangeInput({ key: 'expDate', value })
              }
            />
          </FormField>
          <CheckBox
            value={item.isPermanent}
            onCheck={handleChangeIsPermanent}
            label={I18nAppText.t('shouldAlwaysBePresent')}
          />
          {error && <Text variants={{ color: 'error' }}>{error}</Text>}
          <Button title={I18nAppText.t('save')} onPress={handleSaveItem} />
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { ItemScreen };
