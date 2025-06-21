import { Router } from "express";
import { deleteFavorite, favourites } from "../controllers/favoriteControllers";

const router = Router()

router.post("/", favourites);
router.delete("/:userId/:recipeId", deleteFavorite)

export default router;