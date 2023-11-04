import { createListAllUsersService } from "../../helpers/services";

class ListAllUsersController {
  async index(req: Request, res: Response) {
    createListAllUsersService;
    const listAllUsers = await createListAllUsersService.execute();

    // @ts-ignore
    return res.json(listAllUsers);
  }
}

export { ListAllUsersController };