import { UserProps } from "../../@types/user";
import { createRegisterUserService } from "../../helpers/services";

class CreateUserController {
  async store(req: Request, res: Response): Promise<UserProps> {
    const { data }: any = req.body;
    console.log(data);
    const userData = {
      email: data.email,
      name: data.name,
      nickname: data.nickname,
      post: data.post,
      password: data.password,
      presentation: data.presentation,
      isVerified: false,
      banner: data.banner,
      avatar: data.avatar,
      location: data.location,
      linkedinURL: data.linkedinURL,
      githubURL: data.githubURL,
      defaultURL: data.defaultURL,
      xp: data.xp,
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
