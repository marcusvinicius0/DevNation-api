import prisma from "../../prisma/index";
import { removeKeyAccessFromUniqueJson } from "../../helpers/index";
import { response } from "express";

interface UserUniqueProps {
  userID: string;
};

class ListUniqueUserService {
  async execute({ userID }: UserUniqueProps) {
    const isUserExists = await prisma.user.findFirst({
      where: {
        id: userID,
      },
      include: {
        publications: true,
        likes: true,
        comments: true,
        projects: true,
      },
    });

    if (!isUserExists) {
      // return response.status(404).json("Usuário não encontrado")
      // tratar erro
      return;
    }

    // @ts-ignore
    removeKeyAccessFromUniqueJson(isUserExists);

    return isUserExists;
  }
};

export { ListUniqueUserService };
