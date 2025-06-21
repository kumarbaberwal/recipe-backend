"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favorites = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.favorites = (0, pg_core_1.pgTable)("favorites", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.text)("user_id").notNull(),
    recipeId: (0, pg_core_1.integer)("recipe_id").notNull(),
    title: (0, pg_core_1.text)("title").notNull(),
    image: (0, pg_core_1.text)("image"),
    cookTime: (0, pg_core_1.text)("cook_time"),
    servings: (0, pg_core_1.text)("servings"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow()
});
