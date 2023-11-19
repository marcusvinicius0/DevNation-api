import { createListAllUsersPostsService } from "../../../helpers/services";

class ListAllUsersPostsController {
  async index(req: Request, res: Response) {
    createListAllUsersPostsService;
    const allUsersPosts = await createListAllUsersPostsService.execute({});

    // @ts-ignore
    return res.json(allUsersPosts);
  }
}

export { ListAllUsersPostsController };
