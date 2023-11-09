"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const CreateUserController_1 = require("../controllers/user/CreateUserController");
const ListAllUsersController_1 = require("../controllers/user/ListAllUsersController");
// rotas públicas
_1.default.post("/user/register", new CreateUserController_1.CreateUserController().store);
_1.default.get("/user/listall", new ListAllUsersController_1.ListAllUsersController().index);
// rotas privadas 
// routes.get("/user/list/:id", new ListSingleUserController().show);
exports.default = _1.default;
