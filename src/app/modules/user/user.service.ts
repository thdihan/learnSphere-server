import { TUser } from './user.interface';
import { UserModel } from './user.model';

// Create User Into Database
const createUserIntoDB = async (user: TUser) => {
    const newUser = await UserModel.create(user);
    return newUser;
};

export const UserService = {
    createUserIntoDB,
};
