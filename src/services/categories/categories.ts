import { eq } from 'drizzle-orm';

import { Category } from 'common/types';
import { categoriesTable, itemsTable } from 'db';

import { db } from '../db/db';

class Categories {
  getAll = () => {
    return db.select().from(categoriesTable);
  };

  getById = (id: number) => {
    return db.select().from(categoriesTable).where(eq(categoriesTable.id, id));
  };

  getByName = (name: string) => {
    return db
      .select()
      .from(categoriesTable)
      .where(eq(categoriesTable.name, name));
  };

  create = (name: string) => {
    return db.insert(categoriesTable).values({ name }).returning();
  };

  update = ({ id, name }: Category) => {
    return db
      .update(categoriesTable)
      .set({ name })
      .where(eq(categoriesTable.id, id))
      .returning();
  };

  getAllWithItems = () => {
    return db
      .select({
        id: categoriesTable.id,
        name: categoriesTable.name,
        items: itemsTable,
      })
      .from(categoriesTable)
      .leftJoin(itemsTable, eq(categoriesTable.id, itemsTable.categoryId));
  };
}

const categoriesService = new Categories();

export { categoriesService };
