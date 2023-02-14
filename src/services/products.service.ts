import { Iproduct } from '../interfaces/products.interface';
import index from '../models';

const { ProductsModel } = index;

class ProductsService {
  static async insert(products: Iproduct) {
    const result = await ProductsModel.insert(products);

    return result;
  }

  static async read() {
    const result = await ProductsModel.read();

    return result;
  }
}

export default ProductsService;