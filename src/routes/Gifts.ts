import { Request, Response } from "express";

const router = require("express").Router();

const giftsController = require("../controllers/GiftsControllers");

router
    .route("/gifts")
    .post((req: Request, res: Response) => giftsController.create(req, res))

router
    .route("/giftsmany")
    .post((req: Request, res: Response) => giftsController.createMany(req, res))

router
    .route("/gifts")
    .get((req: Request, res: Response) => giftsController.getAll(req, res))

router
    .route("/gifts/:id")   
    .put((req: Request, res: Response) => giftsController.update(req, res))

module.exports = router