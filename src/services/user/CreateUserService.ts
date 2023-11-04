import { response } from "express";
import prismaClient from "../../prisma";
import { hash } from "bcrypt";

class CreateUserService {
  async execute({ userData }: any) {
    const user = userData;

    const userExistsIn = await prismaClient.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (userExistsIn) {
      return response.status(404).json({ error: "Email já existe." });
    }

    const password_hash = await hash(user.password, 10);

    const registerUser = await prismaClient.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        nickname: user.nickname,
        post: user.post,
        password: password_hash,
        presentation: user.presentation,
        isVerified: user.isVerified,
        banner: user.banner,
        avatar: user.avatar,
        location: user.location,
        linkedinURL: user.linkedinURL,
        githubURL: user.githubURL,
        defaultURL: user.defaultURL,
        xp: user.xp,
        isBanned: user.isBanned,
        role: user.role,
      },
      select: {
        id: true,
        email: true,
        name: true,
        nickname: true,
        post: true,
        presentation: true,
        isVerified: true,
        banner: true,
        avatar: true,
        location: true,
        linkedinURL: true,
        githubURL: true,
        defaultURL: true,
        xp: true,
        isBanned: true,
        role: true,
      },
    });

    return registerUser;
  }
}

export { CreateUserService };
