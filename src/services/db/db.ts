import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as SQLite from 'expo-sqlite';

import * as schema from '../../db/schema';

const expoDb = SQLite.openDatabaseSync('db.db');
const db = drizzle(expoDb, { schema });

export { expoDb, db };
