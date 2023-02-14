import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

import { IjwtPayload } from '../../interfaces/products.interface';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

class TokenJwt {
  static generateToken(payload: IjwtPayload) {
    const token = jwt.sign({ data: payload }, secret, jwtConfig);

    return token;
  }
}

export default TokenJwt;
