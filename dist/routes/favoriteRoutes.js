"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favoriteControllers_1 = require("../controllers/favoriteControllers");
const router = (0, express_1.Router)();
router.post("/", favoriteControllers_1.favourites);
router.get("/:userId", favoriteControllers_1.getFavourites);
router.delete("/:userId/:recipeId", favoriteControllers_1.deleteFavorite);
exports.default = router;
