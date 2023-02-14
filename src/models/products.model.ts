import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Iproduct } from '../interfaces/products.interface';
import connection from './connection';

class ProductsModel {
  static async insert(newProduct: Iproduct) {
    const columns = Object.keys(newProduct).join(', ');
  
    const placeholders = Object.keys(newProduct)
      .map((_key) => '?')
      .join(', ');
  
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.products (${columns}) VALUE (${placeholders})`,
      [...Object.values(newProduct)],
    );
  
    return insertId;
  }

  static async read() {
    const [result] = await connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );

    return result;
  }
}

export default ProductsModel;