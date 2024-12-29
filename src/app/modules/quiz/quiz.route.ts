import express from 'express';
import { QuizController } from './quiz.controller';

const router = express.Router();

router.post('/generate', QuizController.generateQuiz);

export const QuizRoute = router;
