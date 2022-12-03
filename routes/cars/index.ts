import express from 'express';

const CarRouter = express.Router();


CarRouter.get('/', (req: any, res: any) => {
    res.status(200).send(true);
});

export {CarRouter};