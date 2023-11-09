"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.removeKeyAccessFromJson = exports.userValidationSchema = void 0;
const Yup = __importStar(require("yup"));
exports.userValidationSchema = Yup.object().shape({
    id: Yup.string().required(),
    email: Yup.string().email().required(),
    name: Yup.string().min(4).max(100).required(),
    nickname: Yup.string().min(4).max(50).required(),
    post: Yup.string().max(150).required(),
    password: Yup.string().min(8).max(100).required(),
    presentation: Yup.string().min(50).max(5000).notRequired(),
    isVerified: Yup.boolean().required().default(false),
    banner: Yup.string().notRequired(),
    avatar: Yup.string().notRequired(),
    location: Yup.string().notRequired(),
    linkedinURL: Yup.string().url().notRequired(),
    githubURL: Yup.string().url().notRequired(),
    defaultURL: Yup.string().url().notRequired(),
    xp: Yup.number().default(50).required(),
    isBanned: Yup.boolean().required().default(false),
    role: Yup.string().required(),
});
const removeKeyAccessFromJson = (data) => {
    const filteredJson = Object.values(data).map((item) => {
        delete item.password;
        return item;
    });
    return filteredJson;
};
exports.removeKeyAccessFromJson = removeKeyAccessFromJson;
const allowedOrigins = ["http://localhost:3001"];
const methods = ["GET", "POST", "PUT"];
exports.options = {
    origin: allowedOrigins,
    methods: methods,
};
