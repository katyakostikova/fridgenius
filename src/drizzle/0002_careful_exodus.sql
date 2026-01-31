CREATE TABLE `items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`dateAdded` text DEFAULT (CURRENT_DATE),
	`expDate` text,
	`quantity` integer,
	`unitOfMeasure` text NOT NULL,
	`isPermanent` integer,
	`categoryId` integer,
	FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `items_name_unique` ON `items` (`name`);