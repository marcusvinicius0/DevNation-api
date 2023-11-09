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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersService = void 0;
const express_1 = require("express");
const prisma_1 = __importDefault(require("../../prisma"));
const helpers_1 = require("../../helpers");
class ListAllUsersService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield prisma_1.default.user.findMany({
                include: {
                    publications: true,
                    likes: true,
                    comments: true,
                    projects: true,
                }
            });
            if (!users) {
                return express_1.response
                    .status(404)
                    .json({ message: "Nenhum usuário encontrado." });
            }
            // @ts-ignore
            (0, helpers_1.removeKeyAccessFromJson)(users);
            return users;
        });
    }
}
exports.ListAllUsersService = ListAllUsersService;
