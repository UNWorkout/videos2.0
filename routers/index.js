import express from 'express';
import {
    getVideoById,
    getBatchOfVideosByIdArray,
} from "../controllers/index.js";

const mainRouter = express.Router();

mainRouter.get('/id/:id', getVideoById);
mainRouter.get('/batch', getBatchOfVideosByIdArray);

mainRouter.use('/video', mainRouter);

export default mainRouter;
