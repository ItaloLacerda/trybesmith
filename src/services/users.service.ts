import { Iuser } from '../interfaces/products.interface';
import index from '../models';
import jwt from '../utils/jsonWebToken/generateToken';

const { UsersModel } = index;

class UsersService {
  static async create(newUser: Iuser) {
    const userId = await UsersModel.create(newUser);

    const { level, username, vocation } = newUser;

    if (userId) {
      const tokenResponse = jwt.generateToken({ level, username, vocation });
      return tokenResponse;
    }
  }
}

export default UsersService;