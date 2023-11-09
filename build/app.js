"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const cors_1 = __importDefault(require("cors"));
const helpers_1 = require("./helpers");
// import "./database";
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)(helpers_1.options));
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(route_1.default);
    }
}
exports.default = new App().app;
