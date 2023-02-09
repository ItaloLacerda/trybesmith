import { Request, Response } from 'express';
import index from '../services';

const { ProductsService } = index;

class ProductsController {
  static async insert(req: Request, res: Response) {
    const newProduct = req.body;

    const response = await ProductsService.insert(newProduct);

    return res.status(201).json({ id: response, ...newProduct });
  }
}

export default ProductsController;