import { DBConnect } from '@/db';
import { getAllTemplatsData } from '@/func/templates';
import { mainResponse } from '@/types/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {

    let response: mainResponse = {
        actionDone: false,
        msg: 'No data was found',
        data: []
    };
    let responseCode = 404;

    try {
        await DBConnect();

        const data = await getAllTemplatsData();

        if (data && data.length > 0) {
            response = {
                actionDone: true,
                msg: 'The data was successfully sent',
                data: data
            };
            responseCode = 200;
        }

    } catch (error) {
        response = {
            actionDone: false,
            msg: 'Server error',
            data: []
        };
        responseCode = 500;
    }

    res.status(responseCode).json(response);
}
