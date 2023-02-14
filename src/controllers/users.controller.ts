import { Request, Response } from 'express';
import index from '../services';

const { UsersService } = index;

class ProductsController {
  static async create(req: Request, res: Response) {
    const newUser = req.body;

    const response = await UsersService.create(newUser);

    return res.status(201).json({ token: response });
  }
}

export default ProductsController;