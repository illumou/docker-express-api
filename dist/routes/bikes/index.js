"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRouter = void 0;
const BikeRouter = require('express').Router();
exports.BikeRouter = BikeRouter;
BikeRouter.get('/', (req, res) => {
    res.send(true);
});
