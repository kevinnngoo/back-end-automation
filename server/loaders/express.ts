import cors from "cors";
import { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "../api/routes";

export default ({ app }: { app: Application }) => {
  app.use(cors());
  app.use(require("method-override")());
  app.use(bodyParser.json());
  app.use(cookieParser());

  // Load API routes
  app.use(routes());
};
