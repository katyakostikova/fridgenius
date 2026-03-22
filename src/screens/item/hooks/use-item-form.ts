import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import { UnitOfMeasurement } from 'common/enums';
import { Item, ItemScreenProps, SelectorOption, ValueOf } from 'common/types';
import { itemsService, I18nAppText, categoriesService } from 'services';

type ItemFormProps = {
  itemId?: number;
};

const ITEM_INITIAL_VALUES: Partial<Item> = {
  categoryId: undefined,
  dateAdded: undefined,
  expDate: undefined,
  isPermanent: false,
  name: undefined,
  quantity: undefined,
  unitOfMeasure: UnitOfMeasurement.PIECE,
};

const useItemForm = ({ itemId }: ItemFormProps) => {
  const navigation = useNavigation<ItemScreenProps['navigation']>();
  const isEditScreen = !!itemId;

  const [categoryOptions, setCategoryOptions] = useState<SelectorOption[]>([]);
  const [item, setItem] = useState(() => ITEM_INITIAL_VALUES);
  const [error, setError] = useState<string | null>(null);

  const handleChangeInput = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
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

  const handleChangeIsPermanent = (isPermanent: boolean) => {
    setItem((prev) => ({ ...prev, isPermanent }));
  };

  const handleGetAllCategories = useCallback(async () => {
    const data = await categoriesService.getAll();

    const options = data.map((item) => ({
      key: item.id,
      name: item.name,
    }));
    setCategoryOptions(options);
  }, []);

  const validateForm = async () => {
    const trimmedName = item.name?.trim();
    let error = null;

    if (!trimmedName) {
      error = I18nAppText.t('itemEmptyName');
    } else {
      const existingItems = await itemsService.getByName(trimmedName);

      if (existingItems.length > 0) {
        error = I18nAppText.t('itemTakenName');
      }
    }

    if (!item.quantity) {
      error = I18nAppText.t('itemEmptyQuantity');
    }

    if (!item.categoryId) {
      error = I18nAppText.t('itemSelectCategory');
    }

    if (!item.dateAdded) {
      error = I18nAppText.t('itemEmptyDateAdded');
    }

    setError(error);
    return error;
  };

  const resetForm = () => {
    setItem(ITEM_INITIAL_VALUES);
  };

  const handleSaveItem = async () => {
    const error = await validateForm();

    if (error) {
      return;
    }

    // TODO: toast message if error occurs
    if (isEditScreen) {
      await itemsService.update({ id: itemId, ...item } as Item);
    } else {
      console.log('here');
      await itemsService.create(item as Omit<Item, 'id'>);
    }

    if (isEditScreen) {
      navigation.goBack();
    } else {
      resetForm();
    }
  };

  //   // TODO: add loading state component
  //   useEffect(() => {
  //     if (data && data.length > 0) {
  //       // TODO: edit logic
  //       //   setItem(data[0].name);
  //     }
  //   }, [data]);

  useEffect(() => {
    handleGetAllCategories();
  }, [handleGetAllCategories]);

  return {
    item,
    error,
    isEditScreen,
    categoryOptions,
    handleChangeInput,
    handleChangeCategory,
    handleChangeUnit,
    handleChangeIsPermanent,
    handleSaveItem,
  };
};

export { useItemForm };
