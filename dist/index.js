"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./configs/env");
const favoriteRoutes_1 = __importDefault(require("./routes/favoriteRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Kumar',
    });
});
app.use("/favorites", favoriteRoutes_1.default);
const PORT = env_1.ENV.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
