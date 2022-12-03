"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRouter = void 0;
const express_1 = __importDefault(require("express"));
const CarRouter = express_1.default.Router();
exports.CarRouter = CarRouter;
CarRouter.get('/', (req, res) => {
    res.status(200).send(true);
});
