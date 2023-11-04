import { response } from "express";
import prismaClient from "../../prisma";

import { removeKeyAccessFromJson } from "../../helpers";

class ListAllUsersService {
  async execute() {
    const users = await prismaClient.user.findMany({
      include: {
        publications: true,
        likes: true,
        comments: true,
        projects: true,
      }
    });

    if (!users) {
      return response
        .status(404)
        .json({ message: "Nenhum usuário encontrado." });
    }

    // @ts-ignore
    removeKeyAccessFromJson(users);

    return users;
  }
}

export { ListAllUsersService };
