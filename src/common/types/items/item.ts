import { InferSelectModel } from 'drizzle-orm';

import { itemsTable } from 'db';

type Item = InferSelectModel<typeof itemsTable>;

export type { Item };
