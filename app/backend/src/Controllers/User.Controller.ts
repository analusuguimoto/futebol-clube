import { Request, Response } from 'express';
import UserServices from '../Services/User.Service';
import statushttp from '../utils/statushttp';

class UserController {
  private _userService: UserServices;

  constructor() {
    this._userService = new UserServices();
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userInfo = await this._userService.loginVerify(email, password);
    res.status(statushttp(userInfo.status)).json(userInfo.data);
  }

  async getRole(req: Request, res:Response) {
    const { user } = req.body;
    console.log('string aqui', user);
    const service = await this._userService.getUserRole(user.email);
    res.status(statushttp(service.status)).json(service.data);
  }
}

export default UserController;
