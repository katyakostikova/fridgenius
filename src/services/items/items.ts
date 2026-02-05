import { eq } from 'drizzle-orm';

import { Item } from 'common/types';
import { itemsTable } from 'db';

import { db } from '../db/db';

class Items {
  getAll = () => {
    return db.select().from(itemsTable);
  };

  getById = (id: number) => {
    return db.select().from(itemsTable).where(eq(itemsTable.id, id));
  };

  getByName = (name: string) => {
    try {
      return db.select().from(itemsTable).where(eq(itemsTable.name, name));
    } catch (err) {
      console.warn(err);
      return [];
    }
  };

  create = (data: Omit<Item, 'id'>) => {
    console.log(data);
    return db.insert(itemsTable).values(data).returning();
  };

  update = (data: Item) => {
    const { id, ...body } = data;

    return db
      .update(itemsTable)
      .set(body)
      .where(eq(itemsTable.id, id))
      .returning();
  };
}

const itemsService = new Items();

export { itemsService };
