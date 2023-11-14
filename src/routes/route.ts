import routes from ".";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { ListAllUsersController } from "../controllers/user/ListAllUsersController";
import { AuthenticationUserController } from "../controllers/user/AuthenticationUserController";

import { CreatePostController } from "../controllers/CreatePostController";

import { isUserAuthenticated } from "../middlewares/isUserAuthenticated";

routes.post("/user/register", new CreateUserController().store);
routes.get("/user/listall", new ListAllUsersController().index);
routes.post("/user/session", new AuthenticationUserController().store);

// rotas privadas 
// routes.get("/user/list/:id", new ListSingleUserController().show);
routes.post("/user/create/post", isUserAuthenticated, new CreatePostController().store);

export default routes;
