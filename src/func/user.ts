import jwt from 'jsonwebtoken';
import UserModel from '@/schema/user';

const JWT_SECRET = process.env.JWT_SECRET||'';

export const createUser = async (username: string, email: string) => {
    try {
        const newUser = new UserModel({ username, email });
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, username: newUser.username, email: newUser.email },
            JWT_SECRET,
        );

        return { actionDone: true, token };
    } catch (error) {
        console.error(error);
        return { actionDone: false, message: 'Error creating user' };
    }
};
