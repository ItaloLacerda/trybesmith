import index from '../models';

const { OrdersModel } = index;

class OrdersService {
  static async read() {
    const result = await OrdersModel.read();

    return result;
  }
}

export default OrdersService;