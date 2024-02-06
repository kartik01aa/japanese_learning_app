import { Router } from "express";
import {
     getHiraganaApi,
} from "../controllers/quiz.controller";

const quizRouter = Router();

quizRouter.get("/getHiraganaApi", getHiraganaApi);

export default quizRouter;