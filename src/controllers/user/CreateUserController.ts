import { UserProps } from "../../@types/user";
import { createRegisterUserService } from "../../helpers/services";

class CreateUserController {
  async store(req: Request, res: Response): Promise<UserProps> {
    const { user }: any = req.body;

    const userData = {
      email: user.email,
      name: user.name,
      nickname: user.nickname,
      post: user.post,
      password: user.password,
      presentation: user.presentation,
      isVerified: user.isVerified,
      banner: user.banner,
      avatar: user.avatar,
      location: user.location,
      linkedinURL: user.linkedinURL,
      githubURL: user.githubURL,
      defaultURL: user.defaultURL,
      xp: user.xp,
      isBanned: user.isBanned,
      role: user.role,
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
