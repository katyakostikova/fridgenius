import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const categoriesTable = sqliteTable('categories', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
});

export { categoriesTable };
