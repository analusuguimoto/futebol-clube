import { Request, Response, Router } from 'express';
import LoginAuth from '../middlewares/loginAuthenticator';
import UserController from '../Controllers/User.Controller';
import tokenCheck from '../middlewares/tokenAuthenticator';

const userRouter = Router();
const newUserController = new UserController();

userRouter.post('/', LoginAuth.loginValidation, (req: Request, res: Response) => {
  newUserController.login(req, res);
});

userRouter.get('/role', tokenCheck.validate, (req: Request, res: Response) => {
  newUserController.getRole(req, res);
});

export default userRouter;
