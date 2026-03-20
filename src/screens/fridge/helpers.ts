import { CategoryWithItems, Item } from 'common/types';

type Section = {
  id: number;
  title: string;
  data: Item[];
};

const getSectionListData = (categories: CategoryWithItems[]): Section[] => {
  return categories.map((category) => ({
    id: category.id,
    title: category.name,
    data: category.items,
  }));
};

export { getSectionListData };
