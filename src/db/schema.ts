import { pgTable, serial, timestamp, text, integer } from "drizzle-orm/pg-core";


export const favorites = pgTable("favorites", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull(),
    recipeId: integer("recipe_id").notNull(),
    title: text("title").notNull(),
    image: text("image"),
    cookTime: integer("cook_time"),
    servings: integer("servings"),
    createdAt: timestamp("created_at").defaultNow()
});