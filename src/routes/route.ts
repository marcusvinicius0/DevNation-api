import routes from ".";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthenticationUserController } from "../controllers/user/AuthenticationUserController";

import { ListAllUsersController } from "../controllers/user/ListAllUsersController";
import { ListUniqueUserController } from "../controllers/user/ListUniqueUserController";

import { CreatePostController } from "../controllers/user/posts/CreatePostController";
import { ListAllUsersPostsController } from "../controllers/user/posts/ListAllUsersPostsController";

routes.post("/user/register", new CreateUserController().store);
routes.post("/user/session", new AuthenticationUserController().store);

routes.get("/user/listall", new ListAllUsersController().index);
routes.get("/user/list/:id", new ListUniqueUserController().show);

routes.post("/user/create/post", new CreatePostController().store);
routes.get("/user/list/posts", new ListAllUsersPostsController().index);


export default routes;
