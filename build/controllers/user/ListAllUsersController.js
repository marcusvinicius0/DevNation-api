"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersController = void 0;
const services_1 = require("../../helpers/services");
class ListAllUsersController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            services_1.createListAllUsersService;
            const listAllUsers = yield services_1.createListAllUsersService.execute();
            // @ts-ignore
            return res.json(listAllUsers);
        });
    }
}
exports.ListAllUsersController = ListAllUsersController;
