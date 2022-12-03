const BikeRouter = require('express').Router();

BikeRouter.get('/', (req: any, res: any) => {
    res.send(true);
});

export {BikeRouter};