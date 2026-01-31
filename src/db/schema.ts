import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { UnitOfMeasurement } from 'common/enums';

const categoriesTable = sqliteTable('categories', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
});

const itemsTable = sqliteTable('items', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
  dateAdded: text().default(sql`(CURRENT_DATE)`),
  expDate: text(),
  quantity: int(),
  unitOfMeasure: text({
    enum: [
      UnitOfMeasurement.PIECE,
      UnitOfMeasurement.LITER,
      UnitOfMeasurement.MILLILITER,
      UnitOfMeasurement.GRAM,
      UnitOfMeasurement.KILOGRAM,
    ],
  }).notNull(),
  isPermanent: int({ mode: 'boolean' }),
  categoryId: int().references(() => categoriesTable.id),
});

export { categoriesTable, itemsTable };
