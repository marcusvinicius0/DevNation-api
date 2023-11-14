import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface userPayloadProps {
  sub: string;
};

export function isUserAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userAuthenticationToken = req.headers.authorization;

  if (!userAuthenticationToken) {
    return res.status(401).end();
  }

  const [, userToken] = userAuthenticationToken.split(" ");

  try {
    const { sub } = verify(
      userToken,
      process.env.JWT_SECRET_KEY!
    ) as userPayloadProps;

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
};
