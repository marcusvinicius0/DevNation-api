import { Request, Response } from "express";
import { createRegisterNewPostService } from "../helpers/services";
import { PostProps } from "../@types";

class CreatePostController {
  async store(req: Request, res: Response) {
    const { post }: PostProps = req.body;
    const user_id = req.user_id;

    console.log("ID DO USER", user_id);

    createRegisterNewPostService;
    const createPost = await createRegisterNewPostService.execute({
      post: post
    });

    return res.json(createPost);
  }
}

export { CreatePostController }; 