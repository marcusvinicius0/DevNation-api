import { Request, Response } from "express";
import { createListUniqueUserService } from "../../helpers/services";

class ListUniqueUserController {
  async show(req: Request, res: Response) {
    const userID = req.params.id;

    if (!userID) {
      return res.json({ status: 400, message: "Nenhuma identificação apresentada." });
    }

    createListUniqueUserService;
    const listUniqueUser = await createListUniqueUserService.execute({
      userID,
    });

    return res.json(listUniqueUser);
  }
}

export { ListUniqueUserController };
