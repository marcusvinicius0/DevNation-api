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
exports.CreateUserService = void 0;
const express_1 = require("express");
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = require("bcrypt");
class CreateUserService {
    execute({ userData }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = userData;
            const userExistsIn = yield prisma_1.default.user.findFirst({
                where: {
                    email: user.email,
                },
            });
            if (userExistsIn) {
                return express_1.response.status(404).json({ error: "Email já existe." });
            }
            const password_hash = yield (0, bcrypt_1.hash)(user.password, 10);
            const registerUser = yield prisma_1.default.user.create({
                data: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    nickname: user.nickname,
                    post: user.post,
                    password: password_hash,
                    presentation: user.presentation,
                    isVerified: user.isVerified,
                    banner: user.banner,
                    avatar: user.avatar,
                    location: user.location,
                    linkedinURL: user.linkedinURL,
                    githubURL: user.githubURL,
                    defaultURL: user.defaultURL,
                    xp: user.xp,
                    isBanned: user.isBanned,
                    role: user.role,
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    nickname: true,
                    post: true,
                    presentation: true,
                    isVerified: true,
                    banner: true,
                    avatar: true,
                    location: true,
                    linkedinURL: true,
                    githubURL: true,
                    defaultURL: true,
                    xp: true,
                    isBanned: true,
                    role: true,
                },
            });
            return registerUser;
        });
    }
}
exports.CreateUserService = CreateUserService;
