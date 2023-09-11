import jwt from 'jsonwebtoken'

const jwtSecret = process.env.JWT_SECRET ?? 'secret';

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {

  return jwt.sign(object, jwtSecret, {
    ...(options && options)
  })
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, jwtSecret)
    console.log(decoded)
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.log(e);
    return {
      valid: false,
      experid: e.message === 'jwt expored',
      decoded: null
    }
  }
}