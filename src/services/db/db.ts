import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as SQLite from 'expo-sqlite';

import * as schema from 'db';

const expoDb = SQLite.openDatabaseSync('db.db', { enableChangeListener: true });
expoDb.execAsync?.(`PRAGMA foreign_keys = ON;`);
const db = drizzle(expoDb, { schema, logger: __DEV__ });

export { expoDb, db };
