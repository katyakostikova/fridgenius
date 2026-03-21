import { useNavigation } from '@react-navigation/native';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { useEffect, useState } from 'react';

import { CategoryScreenProps } from 'common/types';
import { categoriesService, I18nAppText } from 'services';

import { CATEGORY_FORM_COLORS, CATEGORY_FORM_ICONS } from '../constants';
import type { CategoryFormColor, CategoryFormIcon } from '../types';

type CategoryFormProps = {
  categoryId?: number;
};

const useCategoryForm = ({ categoryId }: CategoryFormProps) => {
  const navigation = useNavigation<CategoryScreenProps['navigation']>();
  const isEditScreen = !!categoryId;

  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [iconName, setIconNameState] = useState<CategoryFormIcon>(
    CATEGORY_FORM_ICONS[0],
  );
  const [color, setColorState] = useState<CategoryFormColor>(
    CATEGORY_FORM_COLORS[0],
  );

  const { data } = useLiveQuery(categoriesService.getById(categoryId ?? -1));
  const trimmedName = name.trim();

  const goBack = () => {
    navigation.goBack();
  };

  const setIconName = (value: CategoryFormIcon) => {
    setIconNameState(value);
  };

  const setColor = (value: CategoryFormColor) => {
    setColorState(value);
  };

  const setNameAndClearError = (value: string) => {
    setError(null);
    setName(value);
  };

  const validateNameOnBlur = async () => {
    setError(null);

    if (trimmedName.length === 0) {
      const err = I18nAppText.t('categoryEmptyName');
      setError(err);
      return err;
    }

    return null;
  };

  const validateForm = async () => {
    setError(null);

    if (trimmedName.length === 0) {
      const err = I18nAppText.t('categoryEmptyName');
      setError(err);
      return err;
    }

    const existing = await categoriesService.getByName(trimmedName);
    const conflict = existing[0];

    if (conflict && conflict.id !== categoryId) {
      const err = I18nAppText.t('categoryTakenName');
      setError(err);
      return err;
    }

    return null;
  };

  const handleSaveCategory = async () => {
    const err = await validateForm();

    if (err) {
      return;
    }

    // TODO: toast message if error occurs
    if (isEditScreen) {
      await categoriesService.update({
        id: categoryId,
        name: trimmedName,
        iconName,
        color,
      });
    } else {
      await categoriesService.create({
        name: trimmedName,
        iconName,
        color,
      });
    }

    goBack();
  };

  // TODO: add loading state component
  useEffect(() => {
    if (data && data.length > 0) {
      setName(data[0].name);
    }
  }, [data]);

  return {
    name,
    error,
    iconName,
    color,
    isEditScreen,
    validateNameOnBlur,
    handleSaveCategory,
    setName: setNameAndClearError,
    setIconName,
    setColor,
  };
};

export { useCategoryForm };
