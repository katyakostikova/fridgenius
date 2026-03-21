import { eq } from 'drizzle-orm';

import { Category } from 'common/types';
import { categoriesTable } from 'db';

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

  create = ({ name, iconName, color }: Omit<Category, 'id'>) => {
    return db
      .insert(categoriesTable)
      .values({ name, iconName, color })
      .returning();
  };

  update = ({ id, name, iconName, color }: Category) => {
    return db
      .update(categoriesTable)
      .set({ name, iconName, color })
      .where(eq(categoriesTable.id, id))
      .returning();
  };

  getAllWithItems = () => {
    return db.query.categoriesTable.findMany({
      columns: { id: true, name: true, iconName: true, color: true },
      with: { items: true },
    });
  };
}

const categoriesService = new Categories();

export { categoriesService };
