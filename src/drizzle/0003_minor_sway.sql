PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`date_added` text DEFAULT (CURRENT_DATE),
	`exp_date` text,
	`quantity` integer,
	`unit_of_measure` text NOT NULL,
	`is_permanent` integer,
	`category_id` integer,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_items`("id", "name", "date_added", "exp_date", "quantity", "unit_of_measure", "is_permanent", "category_id") SELECT "id", "name", "date_added", "exp_date", "quantity", "unit_of_measure", "is_permanent", "category_id" FROM `items`;--> statement-breakpoint
DROP TABLE `items`;--> statement-breakpoint
ALTER TABLE `__new_items` RENAME TO `items`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `items_name_unique` ON `items` (`name`);