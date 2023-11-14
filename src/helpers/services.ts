import { CreateUserService } from "../services/user/CreateUserService";
import { ListAllUsersService } from "../services/user/ListAllUsersService";
import { AuthenticationUserService } from "../services/user/AuthenticationUserService";
import { CreatePostService } from "../services/CreatePostService";

export const createRegisterUserService = new CreateUserService();
export const createListAllUsersService = new ListAllUsersService();

export const authenticationUserService = new AuthenticationUserService();
export const createRegisterNewPostService = new CreatePostService();