import { InferSelectModel } from 'drizzle-orm';

import { categoriesTable } from 'db';

import { Item } from '../items/item';

type Category = InferSelectModel<typeof categoriesTable>;

type CategoryWithItems = Category & {
  items: Item[];
};

export type { Category, CategoryWithItems };
