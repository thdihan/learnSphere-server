import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { UserController } from './user.controller';
import { UserValidations } from './user.validate';

const router = express.Router();

router.post(
    '/signup',
    validateRequest(UserValidations.createUserValidateSchema),
    UserController.createUser,
);

export const UserRoute = router;
