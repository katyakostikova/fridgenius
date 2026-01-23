import { InferSelectModel } from 'drizzle-orm';

import { categoriesTable } from 'db';

type Category = InferSelectModel<typeof categoriesTable>;

export type { Category };
