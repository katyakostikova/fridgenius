import { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { UnitOfMeasurement } from 'common/enums';
import { Item, ItemScreenProps, SelectorOption, ValueOf } from 'common/types';
import {
  CheckBox,
  DatePickerInput,
  FormField,
  Input,
  ScreenWrapper,
  Selector,
} from 'components';
import { checkIsIos } from 'helpers';
import { categoriesService, I18nAppText } from 'services';

const ITEM_INITIAL_VALUES: Partial<Item> = {
  categoryId: undefined,
  dateAdded: undefined,
  expDate: undefined,
  isPermanent: false,
  name: undefined,
  quantity: undefined,
  unitOfMeasure: UnitOfMeasurement.PIECE,
};

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
  const isEditScreen = !!itemId;

  // TODO: set item data if edit
  const [categoryOptions, setCategoryOptions] = useState<SelectorOption[]>([]);
  const [item, setItem] = useState(() => ITEM_INITIAL_VALUES);

  const handleChangeDate = ({ key, value }: { key: string; value: string }) => {
    setItem((prev) => ({ ...prev, [key]: value }));
  };

  const handleChangeUnit = (unitOfMeasure: number | string) => {
    setItem((prev) => ({
      ...prev,
      unitOfMeasure: unitOfMeasure as ValueOf<typeof UnitOfMeasurement>,
    }));
  };

  const handleChangeCategory = (categoryId: number | string) => {
    setItem((prev) => ({ ...prev, categoryId: +categoryId }));
  };

  const handleChangeIsPermanent = () => {
    setItem((prev) => ({ ...prev, isPermanent: !prev.isPermanent }));
  };

  const handleGetAllCategories = useCallback(async () => {
    const data = await categoriesService.getAll();

    const options = data.map((item) => ({
      key: item.id,
      name: item.name,
    }));
    setCategoryOptions(options);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditScreen
        ? I18nAppText.t('editItemScreenName')
        : I18nAppText.t('addItemScreenName'),
    });
  }, [isEditScreen, navigation]);

  useEffect(() => {
    handleGetAllCategories();
  }, [handleGetAllCategories]);

  return (
    <ScreenWrapper>
      <ScrollView bounces={false}>
        <KeyboardAvoidingView
          behavior={checkIsIos() ? 'padding' : 'height'}
          className="gap-4 flex-1"
        >
          <FormField label={I18nAppText.t('name')}>
            <Input value={item.name} />
          </FormField>
          <View className="flex-row items-start justify-between gap-3">
            <FormField className="flex-1" label={I18nAppText.t('quantity')}>
              <Input
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
                handleChangeDate({ key: 'dateAdded', value })
              }
            />
          </FormField>
          <FormField label={I18nAppText.t('expDate')}>
            <DatePickerInput
              value={item.expDate}
              onChangeDate={(value) =>
                handleChangeDate({ key: 'expDate', value })
              }
            />
          </FormField>
          <CheckBox
            value={item.isPermanent}
            onCheck={handleChangeIsPermanent}
            label={I18nAppText.t('shouldAlwaysBePresent')}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { ItemScreen };
