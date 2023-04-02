import { Request, Response } from "express";

const router = require("express").Router();

const guestController = require("../controllers/GuestsController");

router
    .route("/guest")
    .post((req:Request, res:Response) => guestController.create(req, res))

router
    .route("/guest")
    .get((req:Request, res:Response) => guestController.getAll(req, res));

router
    .route("/guestsmany")
    .post((req: Request, res: Response) => guestController.createMany(req, res))

router
    .route("/guest/:id")
    .get((req:Request, res:Response) => guestController.get(req, res))

router
    .route("/guest/:id")
    .put((req:Request, res:Response) => guestController.update(req, res));

router
    .route("/guest/:id")
    .delete((req:Request, res:Response) => guestController.delete(req, res));

router
    .route("/guest/sorted/:id")
    .put((req:Request, res:Response) => guestController.sortedGift(req, res))

module.exports = router;