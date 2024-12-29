import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { NotesRoute } from '../modules/notes/notes.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
