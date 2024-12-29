import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { QuizService } from './quiz.service';

const generateQuiz = catchAsync(async (req, res) => {
    const { message } = req.body;

    const result = await QuizService.generateQuizByAI(message);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Quiz generated successfully',
        data: result,
    });
});

export const QuizController = {
    generateQuiz,
};
