import axios from "axios";
import { serverUrl } from "var";
const JWT_SECRET = process.env.JWT_SECRET;

export const createUser = async (username: string, email: string) => {
    const url = serverUrl + 'user/register'
    axios.get(url)

};
