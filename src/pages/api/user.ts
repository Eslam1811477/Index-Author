import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '@/func/user';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, email } = req.body;

        console.log(req.body)

        if (!username || !email) {
            return res.status(400).json({ actionDone: false, message: 'Username and email are required' });
        }

        const result = await createUser(username, email);

        if (result.actionDone) {
            res.status(201).json({ actionDone: true, token: result.token });
        } else {
            res.status(500).json({ actionDone: false, message: result.message });
        }
    } else {
        res.status(405).json({ actionDone: false, message: 'Method not allowed' });
    }
}