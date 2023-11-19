import { Request, Response } from "express";
import { createRegisterNewPostService } from "../../../helpers/services";
import { PostProps } from "../../../@types";

class CreatePostController {
  async store(req: Request, res: Response) {
    const { post }: PostProps = req.body;

    createRegisterNewPostService;
    const createPost = await createRegisterNewPostService.execute({
      post: post
    });

    return res.json(createPost);
  }
}

export { CreatePostController }; 