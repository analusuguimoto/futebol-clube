import UserIf from './UserIf';

interface UserFindIf {
  findUserByEmail(email: string): Promise<UserIf | null>
}

export default UserFindIf;
