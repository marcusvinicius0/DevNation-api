import routes from ".";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { ListAllUsersController } from "../controllers/user/ListAllUsersController";

// rotas públicas
routes.post("/user/register", new CreateUserController().store);
routes.get("/user/listall", new ListAllUsersController().index);
// rotas privadas 
// routes.get("/user/list/:id", new ListSingleUserController().show);

export default routes;
