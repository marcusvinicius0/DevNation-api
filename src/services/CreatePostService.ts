import prisma from "../prisma/index";
import { PostProps } from "../../src/@types";

class CreatePostService {
  async execute({ post }: PostProps) {
    console.log(post);
    const postData = post;
    
    const createNewPost = await prisma.publications.create({
      data: {
        id: postData.id,
        authorID: postData.authorID,
        publication: postData.publication,
        likes: postData.likes,
        Comments: postData.comments,
      },
      select: {
        id: true,
        authorID: true,
        publication: true,
        likes: true,
        Comments: true,
      }
    })
    
    return createNewPost;
  }
}

export { CreatePostService };
