import { Request, Response } from "express";
import { db } from "../../utilities/mongo";

export default class getUser {
  public getUser = async (req: Request, res: Response) => {
    try {
      const user = await db.collection("users").find().toArray();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
