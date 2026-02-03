import { FC, useLayoutEffect, useState } from 'react';

import { UnitOfMeasurement } from 'common/enums';
import { Item, ItemScreenProps } from 'common/types';
import {
  CheckBox,
  DatePickerInput,
  FormField,
  Input,
  ScreenWrapper,
  Selector,
} from 'components';
import { I18nAppText } from 'services';

const ITEM_INITIAL_VALUES: Partial<Item> = {
  categoryId: undefined,
  dateAdded: undefined,
  expDate: undefined,
  isPermanent: false,
  name: undefined,
  quantity: undefined,
  unitOfMeasure: UnitOfMeasurement.PIECE,
};

const testOprtions = [
  { key: 1, name: 'Cat1' },
  { key: 2, name: 'Cat2' },
  { key: 3, name: 'Cat3' },
];

const ItemScreen: FC<ItemScreenProps> = ({ route, navigation }) => {
  const { itemId } = route.params ?? {};
  const isEditScreen = !!itemId;

  // TODO: set item data if edit
  const [item, setItem] = useState(() => ITEM_INITIAL_VALUES);

  const handleChangeDate = ({ key, value }: { key: string; value: string }) => {
    setItem((prev) => ({ ...prev, [key]: value }));
  };

  const handleChangeCategory = (categoryId: number | string) => {
    setItem((prev) => ({ ...prev, categoryId: +categoryId }));
  };

  const handleChangeIsPermanent = () => {
    setItem((prev) => ({ ...prev, isPermanent: !prev.isPermanent }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditScreen
        ? I18nAppText.t('editItemScreenName')
        : I18nAppText.t('addItemScreenName'),
    });
  }, [isEditScreen, navigation]);

  return (
    <ScreenWrapper className="gap-4">
      <FormField label="Name">
        <Input value={item.name} />
      </FormField>
      <FormField label="Quantity">
        <Input value={String(item.quantity ?? 0)} keyboardType="decimal-pad" />
      </FormField>
      <FormField label="Date added">
        <DatePickerInput
          value={item.dateAdded}
          onChangeDate={(value) =>
            handleChangeDate({ key: 'dateAdded', value })
          }
        />
      </FormField>
      <FormField label="Expiration date">
        <DatePickerInput
          value={item.expDate}
          onChangeDate={(value) => handleChangeDate({ key: 'expDate', value })}
        />
      </FormField>
      <CheckBox
        value={item.isPermanent}
        onCheck={handleChangeIsPermanent}
        label="Should always be present"
      />
      <FormField label="Category">
        <Selector
          options={testOprtions}
          value={item.categoryId}
          onSelect={handleChangeCategory}
        />
      </FormField>
    </ScreenWrapper>
  );
};

export { ItemScreen };
