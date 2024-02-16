import { Request, Response, NextFunction } from 'express';

class LoginAuthenticator {
  static loginValidation(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regex.test(email) || password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    next();
  }
}

export default LoginAuthenticator;
