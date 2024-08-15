import { getAllTemplatsData } from '@/func/templates';
import { mainResponse } from '@/types/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function getAll(req: NextApiRequest, res: NextApiResponse) {

    const data = getAllTemplatsData()


    const response: mainResponse = {
        actionDone: true,
        msg: '',
        data: []
    }
    let responseCode = 0;

    if (data) {
        response.data = data
        response.msg = 'The data was successfully sent'
        responseCode = 200
    } else {
        response.data = []
        response.msg = 'No data was found'
        response.actionDone = false
        responseCode = 404
    }
    res.status(responseCode).json(data);
}
