import { Request, Response } from "express";

const router = require("express").Router();

const adminController = require("../controllers/AdminController")

router
    .route("/admin")
    .post((req: Request, res: Response) => adminController.create(req, res));

router
    .route("/admin")
    .get((req: Request, res: Response) => adminController.getAll(req, res));

router
    .route("/admin/authenticate")
    .put((req: Request, res: Response) => adminController.update(req, res));

module.exports = router;