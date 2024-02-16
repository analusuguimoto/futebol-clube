import * as jwt from 'jsonwebtoken';

type PayloadType = {
  id: number,
  email: string,
  role: string,
};

const secret = process.env.JWT_SECRET || 'jwt_secret';

const tokenSign = (payload: PayloadType): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

const tokenVerification = (token: string): PayloadType => jwt.verify(token, secret) as PayloadType;

export default {
  tokenSign,
  tokenVerification,
};
