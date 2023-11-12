import { UserProps } from "../../@types/user";
import { createRegisterUserService } from "../../helpers/services";

class CreateUserController {
  async store(req: Request, res: Response): Promise<UserProps> {
    const { name, email, password }: any = req.body;

    const userData = {
      email: email,
      name: name,
      nickname: null,
      post: "",
      password: password,
      presentation: "",
      isVerified: false,
      banner: "",
      avatar: "",
      location: "",
      linkedinURL: "",
      githubURL: "",
      defaultURL: "",
      xp: 50,
      isBanned: false,
      role: "USER",
    };

    createRegisterUserService;
    const response = await createRegisterUserService.execute({
      userData,
    });

    // @ts-ignore
    return res.status(201).json(response);
  }
}

export { CreateUserController };
