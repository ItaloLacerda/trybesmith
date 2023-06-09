import { RowDataPacket } from 'mysql2';
import connection from './connection';

class OrdersModel {
  static async read() {
    const [result] = await connection.execute<RowDataPacket[]>(
      ` SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG( p.id ) AS productsIds 
      FROM Trybesmith.orders AS o 
      INNER JOIN Trybesmith.products AS p
        ON o.id = p.order_id GROUP BY id;`,
    );

    return result;
  }
}

export default OrdersModel;