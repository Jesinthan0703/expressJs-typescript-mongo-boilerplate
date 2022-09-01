import { Router } from "express";
import Controller from "./user.controller";

const topSales: Router = Router();
const controller = new Controller();

topSales.get("/", controller.getUser);

export default topSales;
