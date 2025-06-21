import { Request, Response } from "express";
import { db } from "../configs/db";
import { favorites } from "../db/schema";
import { and, eq } from "drizzle-orm";

export const favourites = async (req: Request, res: Response): Promise<any> => {
    try {
        const { userId, recipeId, title, image, cookTime, servings } = req.body;

        if (!userId || !recipeId || !title) {
            return res.status(400).json({
                error: "Missing required fields",
            });
        }

        const newFavorite = await db.insert(favorites).values({
            userId,
            recipeId,
            title,
            image,
            cookTime,
            servings
        }).returning()

        res.status(201).json(
            newFavorite[0]
        )

    } catch (error) {
        console.log("Error in favouriteControllers:", error);
        res.status(500).json({
            error: "Something went wrong",
        });
    }
}

export const deleteFavorite = async (req: Request, res: Response): Promise<any> => {
    try {
        const { userId, recipeId } = req.params;

        if (!userId || !recipeId) {
            return res.status(400).json({
                error: "Missing required fields",
            });
        }

        const deletedFavorite = await db.delete(favorites)
            .where(and(eq(favorites.userId, userId), eq(favorites.recipeId, parseInt(recipeId))))

        res.status(200).json({
            message: "Favorite removed successfully",
        });

    } catch (error) {
        console.log("Error in deleteFavorite:", error);
        res.status(500).json({
            error: "Something went wrong",
        });
    }
}