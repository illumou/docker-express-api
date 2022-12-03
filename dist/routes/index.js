"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const bikes_1 = require("./bikes");
const cars_1 = require("./cars");
router.use('/bikes', bikes_1.BikeRouter);
router.use('/cars', cars_1.CarRouter);
