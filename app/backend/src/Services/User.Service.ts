import * as bcrypt from 'bcryptjs';
import { ServiceResponse } from '../utils/ServiceResponse';
import jwtAuth from '../utils/jwtAuth';
import UserModel from '../model/user.model';

class UserServices {
  private _userModel: UserModel;

  constructor() {
    this._userModel = new UserModel();
  }

  async loginVerify(email: string, password: string): Promise<ServiceResponse<{ token: string }>> {
    if (!email || !password) {
      return {
        status: 'BAD_REQUEST',
        data: { message: 'All fields must be filled' },
      };
    }

    const userFind = await this._userModel.findUserByEmail(email);
    if (!userFind) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const validps = await bcrypt.compare(password, userFind.password);
    if (!validps) return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };

    const jwt = jwtAuth.tokenSign({ id: userFind.id, email: userFind.email, role: userFind.role });
    // console.log(jwt)

    return { status: 'SUCCESS', data: { token: jwt } };
  }

  async getUserRole(email: string): Promise<ServiceResponse<{ role: string }>> {
    const findUser = await this._userModel.findUserByEmail(email);
    if (!findUser) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    return { status: 'SUCCESS', data: { role: findUser.role } };
  }
}

export default UserServices;
