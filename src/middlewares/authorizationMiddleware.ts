import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import environment from '../environment';

function authorizationMiddleware(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  const urlPath = req.url;
  const authorizationToken = req.headers['authorization']?.split(' ')[1];
  if (urlPath.startsWith('/api')) {
    if (!authorizationToken) {
      resp.status(401).json({ message: 'No authorization token' });
    }

    jwt.verify(
      authorizationToken as string,
      environment.TOKEN_SECRET,
      (err: any, client: any) => {
        if (err) {
          resp
            .status(401)
            .json({ message: 'Invalid authorization token', error: err });
          return;
        }

        resp.status(200);
      }
    );
  }
  next();
}

export default authorizationMiddleware;
