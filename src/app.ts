import express, { NextFunction } from 'express';
import routes from './routes/route';

class App {
  app: any;
  constructor() {
    this.app = express();
    // this.app.use((res: any, next: NextFunction) => {
    //   res.setHeader("Access-Control-Allow-Origin", "*"),
    //   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    //   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    //   next();
    // })

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
