import { Request, Response, NextFunction } from 'express';
import tokenVerification from '../utils/jwtAuth';

class tokenAuth {
  static validate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    // console.log('authorization', authorization);
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const tokensplit = authorization.split(' ')[1];

    try {
      const verification = tokenVerification.tokenVerification(tokensplit);
      // console.log('identificacao', verification);
      req.body.user = verification;
    } catch (error) {
      // console.log('error', error);
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  }
}

export default tokenAuth;
