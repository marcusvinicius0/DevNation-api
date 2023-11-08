import express from "express";
import routes from "./routes/route";
import cors from "cors";
import { options } from "./helpers";

// import "./database";
class App {
  app: any;
  constructor() {
    this.app = express();
    this.app.use(cors(options));
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
