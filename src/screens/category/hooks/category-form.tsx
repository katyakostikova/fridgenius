import { useNavigation } from '@react-navigation/native';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { useEffect, useState } from 'react';

import { CategoryScreenProps } from 'common/types';
import { categoriesService, I18nAppText } from 'services';

type CategoryFormProps = {
  categoryId?: number;
};

const useCategoryForm = ({ categoryId }: CategoryFormProps) => {
  const navigation = useNavigation<CategoryScreenProps['navigation']>();
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
      error = I18nAppText.t('categoryEmptyName');
      setError(error);
      return error;
    }

    const existingCategories = await categoriesService.getByName(trimmedName);

    if (existingCategories.length > 0) {
      error = I18nAppText.t('categoryTakenName');
      setError(error);
      return error;
    }

    setError(error);
    return error;
  };

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

  // TODO: add loading state component
  useEffect(() => {
    if (data && data.length > 0) {
      setName(data[0].name);
    }
  }, [data]);

  return {
    name,
    error,
    isEditScreen,
    validateInput,
    handleSaveCategory,
    setName,
  };
};

export { useCategoryForm };
