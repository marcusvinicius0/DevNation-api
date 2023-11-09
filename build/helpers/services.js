"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListAllUsersService = exports.createRegisterUserService = void 0;
const CreateUserService_1 = require("../services/user/CreateUserService");
const ListAllUsersService_1 = require("../services/user/ListAllUsersService");
exports.createRegisterUserService = new CreateUserService_1.CreateUserService();
exports.createListAllUsersService = new ListAllUsersService_1.ListAllUsersService();
