import { Router } from "express";
import { deleteFavorite, favourites, getFavourites } from "../controllers/favoriteControllers";

const router = Router()

router.post("/", favourites);
router.get("/:userId", getFavourites);
router.delete("/:userId/:recipeId", deleteFavorite)

export default router;