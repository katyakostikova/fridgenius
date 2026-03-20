import { CategoryWithItems } from 'common/types';

import { Section } from './types';

const getSectionListData = (categories: CategoryWithItems[]): Section[] => {
  return categories.map((category) => ({
    id: category.id,
    title: category.name,
    data: category.items,
  }));
};

export { getSectionListData };
