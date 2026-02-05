import { sql, relations } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { UnitOfMeasurement } from 'common/enums';

const categoriesTable = sqliteTable('categories', {
  id: int('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
});

const itemsTable = sqliteTable('items', {
  id: int('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  dateAdded: text('date_added').default(sql`(CURRENT_DATE)`),
  expDate: text('exp_date'),
  quantity: int('quantity'),
  unitOfMeasure: text('unit_of_measure', {
    enum: [
      UnitOfMeasurement.PIECE,
      UnitOfMeasurement.LITER,
      UnitOfMeasurement.MILLILITER,
      UnitOfMeasurement.GRAM,
      UnitOfMeasurement.KILOGRAM,
    ],
  }).notNull(),
  isPermanent: int('is_permanent', { mode: 'boolean' }),
  categoryId: int('category_id').references(() => categoriesTable.id),
});

const categoriesRelations = relations(categoriesTable, ({ many }) => ({
  items: many(itemsTable),
}));

const itemsRelations = relations(itemsTable, ({ one }) => ({
  category: one(categoriesTable, {
    fields: [itemsTable.categoryId],
    references: [categoriesTable.id],
  }),
}));

export { categoriesTable, itemsTable, categoriesRelations, itemsRelations };
