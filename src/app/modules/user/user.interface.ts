/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type TUser = {
    role: 'student' | 'teacher';
    name: string;
    email: string;
    password: string;
};

export type TUserWithId = TUser & { _id: Types.ObjectId };

export interface UserModel extends Model<TUser> {
    //instance methods for checking if the user exist
    isUserExistsByEmail(email: string): Promise<Partial<TUserWithId>>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
        plainTextPassword?: string,
        hashedPassword?: string,
    ): Promise<boolean>;
    isJWTIssuedBeforePasswordChanged(
        passwordChangedTimestamp: Date,
        jwtIssuedTimestamp: number,
    ): boolean;
}
