import UserModels from '../database/models/UsersModel';
import UserIf from '../Interfaces/UserIf';
import UserFindIf from '../Interfaces/UserFind';

class UserModel implements UserFindIf {
  private _userModel = UserModels;

  async findUserByEmail(email: string): Promise<UserIf | null> {
    const user = await this._userModel.findOne({ where: { email } });

    if (!user) return null;
    return user;
  }
}

export default UserModel;
