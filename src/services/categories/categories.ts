import { categoriesTable } from 'src/db';

import { db } from '../db/db';

class Categories {
  getAll = () => {
    return db.select().from(categoriesTable);
  };
}

const categoriesService = new Categories();

export { categoriesService };
