import jwt from 'jsonwebtoken'
import { JWT_SIGNING_KEY } from './constants'
import { ErrorResponse } from './ResponseCodes'
import { Request, Response } from 'express';

export async function AuthMiddlewere(req: Request & { decodedToken: any }, res: Response, next: any) {
  const unguardedRoutes = ['', '/']

  if (unguardedRoutes.indexOf(req.path) > -1 || req.path.indexOf('robots') > -1) {
    next()
    return
  }

  let authorization = req.headers.authorization

  try {
    authorization = stripBearerFromAuthHeader(authorization)
    if (!authorization) {
      throw ErrorResponse.USER_UNAUTHORIZED
    }

    await verifyToken(authorization)
    req.decodedToken = jwt.decode(authorization) as jwt.JwtPayload
    next()
  } catch (error) {
    console.error('Token invalid', { error, path: req.path })
    res.status(401).send(error)
    return
  }
}

async function verifyToken(token: string) {
  if (!token || !JWT_SIGNING_KEY) {
    throw ErrorResponse.USER_UNAUTHORIZED
  }

  try {
    const decoded = jwt.verify(token, JWT_SIGNING_KEY);
    return decoded
  } catch (error: any) {
    console.error('JWT Verification Error:', error.message);
    throw ErrorResponse.INVALID_TOKEN
  }
}

function stripBearerFromAuthHeader(authorization?: string): string | undefined {
  return authorization?.replace('Bearer ', '')
}
