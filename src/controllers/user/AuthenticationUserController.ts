import { AuthRequest } from "../../services/user/AuthenticationUserService";
import { authenticationUserService } from "../../helpers/services";

class AuthenticationUserController {
  async store(req: Request, res: Response) {
    const { email, password }: any = req.body;

    authenticationUserService;
    const response = await authenticationUserService.execute({
      email,
      password,
    })

    // @ts-ignore 
    return res.json(response);
  }
}

export { AuthenticationUserController };
