import { Router } from "express";
import path from "path";

export const pageRouter = Router();

pageRouter.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
})