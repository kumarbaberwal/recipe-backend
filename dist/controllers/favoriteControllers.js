"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavourites = exports.deleteFavorite = exports.favourites = void 0;
const db_1 = require("../configs/db");
const schema_1 = require("../db/schema");
const drizzle_orm_1 = require("drizzle-orm");
const favourites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, recipeId, title, image, cookTime, servings } = req.body;
        if (!userId || !recipeId || !title) {
            return res.status(400).json({
                error: "Missing required fields",
            });
        }
        const newFavorite = yield db_1.db.insert(schema_1.favorites).values({
            userId,
            recipeId,
            title,
            image,
            cookTime,
            servings
        }).returning();
        res.status(201).json(newFavorite[0]);
    }
    catch (error) {
        console.log("Error in favouriteControllers:", error);
        res.status(500).json({
            error: "Something went wrong",
        });
    }
});
exports.favourites = favourites;
const deleteFavorite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, recipeId } = req.params;
        if (!userId || !recipeId) {
            return res.status(400).json({
                error: "Missing required fields",
            });
        }
        const deletedFavorite = yield db_1.db.delete(schema_1.favorites)
            .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schema_1.favorites.userId, userId), (0, drizzle_orm_1.eq)(schema_1.favorites.recipeId, parseInt(recipeId))));
        res.status(200).json({
            message: "Favorite removed successfully",
        });
    }
    catch (error) {
        console.log("Error in deleteFavorite:", error);
        res.status(500).json({
            error: "Something went wrong",
        });
    }
});
exports.deleteFavorite = deleteFavorite;
const getFavourites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({
                error: "Missing userId",
            });
        }
        const userFavorites = yield db_1.db.select().from(schema_1.favorites).where((0, drizzle_orm_1.eq)(schema_1.favorites.userId, userId));
        res.status(200).json(userFavorites);
    }
    catch (error) {
        console.log("Error in getFavourites:", error);
        res.status(500).json({
            error: "Something went wrong",
        });
    }
});
exports.getFavourites = getFavourites;
