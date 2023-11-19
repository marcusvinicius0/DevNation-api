import { CreateUserService } from "../services/user/CreateUserService";
import { ListAllUsersService } from "../services/user/ListAllUsersService";
import { ListUniqueUserService } from "../services/user/ListUniqueUserService";

import { CreatePostService } from "../services/user/posts/CreatePostService";
import { ListAllUsersPostsService } from "../services/user/posts/ListAllUsersPostsService";

import { AuthenticationUserService } from "../services/user/AuthenticationUserService";

export const createRegisterUserService = new CreateUserService();
export const authenticationUserService = new AuthenticationUserService();

export const createListAllUsersService = new ListAllUsersService();
export const createListUniqueUserService = new ListUniqueUserService();
export const createRegisterNewPostService = new CreatePostService();
export const createListAllUsersPostsService = new ListAllUsersPostsService();