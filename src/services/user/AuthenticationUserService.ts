import prisma from "../../prisma/index";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export interface AuthRequest {
  email: string;
  password: string;
}

class AuthenticationUserService {
  async execute({ email, password }: AuthRequest) {
    const isUser = await prisma.user.findFirst({
      where: {
        email: email
      },
    });

    if (!isUser) {
      throw new Error("Email ou senha incorretos.");
    };

    const isPasswordMatch = await compare(password, isUser.password);

    if (!isPasswordMatch) {
      throw new Error("Email ou senha incorretos.");
    };

    const userToken = sign(
      {
        name: isUser.name,
        email: isUser.email,
      },
      process.env.JWT_SECRET_KEY!,
      {
        subject: isUser.id,
        expiresIn: "5d",
      }
    );

    const user = {
      id: isUser.id,
      name: isUser.name,
      email: isUser.email,
      token: userToken,
    };

    return user;
  }
}

export { AuthenticationUserService };
