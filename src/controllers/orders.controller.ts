import { Request, Response } from 'express';
import index from '../services';

const { OrdersService } = index;

class OrdersController {
  static async read(_req: Request, res: Response) {
    const response = await OrdersService.read();

    return res.status(200).json(response);
  }
}

export default OrdersController;