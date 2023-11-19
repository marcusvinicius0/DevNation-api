import prisma from "../../../prisma/index";
import { PostProps } from "../../../@types";
import { removeKeyAccessFromJson } from "../../../helpers";

class CreatePostService {
  async execute({ post }: PostProps) {
    const postData = post;

    const createNewPost = await prisma.publications.create({
      data: {
        id: postData.id,
        authorID: postData.authorID,
        publication: postData.publication,
        image: postData.image,
        likes: postData.likes,
        Comments: postData.comments,
      },
      select: {
        id: true,
        authorID: true,
        publication: true,
        image: true,
        likes: true,
        Comments: true,
        createdAt: true,
        updatedAt: true,
        author: true,
      },
    });

    // @ts-ignore
    removeKeyAccessFromJson(createNewPost);

    return createNewPost;
  }
}

export { CreatePostService };
