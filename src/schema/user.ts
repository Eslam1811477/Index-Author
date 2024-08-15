import { Schema, model } from 'mongoose';

interface IUser {
    username: string;
    email: string;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
