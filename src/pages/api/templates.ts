import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { authenticateJWT } from '@/decorator/JWT';
import { addNewTemplate, getAllTemplatsData } from '@/func/templates';
import { mainResponse } from '@/types/response';
import { Template } from '@/types/templates';

// Configure multer for file handling
const upload = multer({
    storage: multer.diskStorage({
        destination: (req: any, file: any, cb: any) => {
            const uploadDir = path.join(process.cwd(), 'storage', 'template');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            cb(null, uploadDir);
        },
        filename: (req: any, file: any, cb: any) => {
            cb(null, file.originalname);
        },
    }),
});

export const config = {
    api: {
        bodyParser: false,
    },
};

async function get_All_templates(req: NextApiRequest, res: NextApiResponse) {
    let response: mainResponse = {
        actionDone: false,
        msg: 'No data was found',
        data: [],
    };
    let responseCode = 404;

    try {
        const data = await getAllTemplatsData();

        if (data && data.length > 0) {
            response = {
                actionDone: true,
                msg: 'The data was successfully sent',
                data: data,
            };
            responseCode = 200;
        }
    } catch (error) {
        response = {
            actionDone: false,
            msg: 'Server error',
            data: [],
        };
        responseCode = 500;
    }

    res.status(responseCode).json(response);
}

async function add_template(req: NextApiRequest, res: NextApiResponse) {
    let response: mainResponse = {
        actionDone: false,
        msg: 'Template not added',
        data: [],
    };
    let responseCode = 404;



    console.log(req.body)
    // const { name, plugins, json_data } = req.body;


    // // Construct the template data
    // const templateData: Template = {
    //     name: name as string,
    //     imgUrl: `/storage/template/${name}`, // Save the relative path of the image
    //     plugins: JSON.parse(plugins as string) || [], // Parse the plugins if sent
    //     content: JSON.parse(json_data as string), // Parse the content as JSON
    // };

    // const success = await addNewTemplate(templateData);

    // if (success) {
    //     response = {
    //         actionDone: true,
    //         msg: 'Template added successfully',
    //         data: [templateData],
    //     };
    //     responseCode = 200;
    // }

    // res.status(responseCode).json(response);
}



var JWTcondition = true;

const TemplateRouter = (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            JWTcondition = true;
            get_All_templates(req, res);
            break;
        case 'POST':
            JWTcondition = true;
            add_template(req, res);
            break;
    }
};

export default authenticateJWT(TemplateRouter, JWTcondition);
