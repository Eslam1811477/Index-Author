import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'qgiiRj0lMtC41kTOjZIJldoT6n2Cqts5';

interface UserPayload {
  id: string;
}

export const authenticateJWT = (handler: NextApiHandler, condition:boolean) => {

  const fToCheck = ['TemplateRouter']

  return async (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;

    if(fToCheck.includes(handler.name) && condition){
    if (authHeader && typeof(authHeader)=='string') {
      const token = authHeader.split(' ')[1];
      try {
        const user = jwt.verify(token, 'qgiiRj0lMtC41kTOjZIJldoT6n2Cqts5') as UserPayload;
        (req as any).user = user;
        return handler(req, res);
      } catch (err) {
        console.log(err)
        return res.status(403).json({ message: 'Forbidden' });
      }
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }else{
    console.log('first')
    return handler(req, res);
  }
  };
};