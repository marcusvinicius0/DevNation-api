import { CreateUserService } from "../services/user/CreateUserService";
import { ListAllUsersService } from "../services/user/ListAllUsersService";

export const createRegisterUserService = new CreateUserService();
export const createListAllUsersService = new ListAllUsersService();
