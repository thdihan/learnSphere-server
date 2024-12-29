import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { NotesRoute } from '../modules/notes/notes.route';
import { QuizRoute } from '../modules/quiz/quiz.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/user',
        route: UserRoute,
    },
    {
        path: '/notes',
        route: NotesRoute,
    },
    {
        path: '/quiz',
        route: QuizRoute,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
