import prismaClient from "../../../prisma";
import { removeKeyAccessFromJson } from "../../../helpers";

class ListAllUsersPostsService {
  async execute({}) {
    const isPosts = await prismaClient.publications.findMany({
      include: {
        author: true,
        Comments: true,
        likes: true,
      },
    });

    console.log(isPosts);

    if (!isPosts) {
      throw new Error("Nenhuma publicação foi encontrada.");
    }

    const removeAuthorPass = isPosts.map((post) => {
      // @ts-ignore
      delete post.author.password;
      return post;
    });

    const posts = isPosts;

    return posts;
  }
}

export { ListAllUsersPostsService };
