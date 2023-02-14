import { ResultSetHeader } from 'mysql2';
import { Iuser } from '../interfaces/products.interface';
import connection from './connection';

class UsersModel {
  static async create(newUser: Iuser) {
    const columns = Object.keys(newUser).join(', ');
  
    const placeholders = Object.keys(newUser)
      .map((_key) => '?')
      .join(', ');
  
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.users (${columns}) VALUE (${placeholders})`,
      [...Object.values(newUser)],
    );
    return insertId;
  }
}

export default UsersModel;