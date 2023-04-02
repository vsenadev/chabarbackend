import { Request, Response } from "express";

const AdminModel = require("../models/Admin");

const adminController = {
    create:async (req: Request, res: Response) => {
        try {
            const admin = {
                user: req.body.user,
                password: req.body.password
            };

            const response = await AdminModel.create(admin)

            res.status(201).json({ response, msg: "Usuário criado com sucesso." });
        } catch (error) {
            console.log(error)
        }
    },
    getAll:async(req: Request, res: Response) => {
        try {
            const admin = await AdminModel.find();

            res.json(admin)
        }catch (error) {
            console.log(error)
        }
    },
    update:async(req: Request, res: Response) => {
        const { user, password } = req.body;
        const filter = { user: user, password: password };
        const authenticate = await AdminModel.find(filter);

        if(authenticate.length > 0) {
            res.status(200).json({ msg: 'Login realizado com sucesso!' });
        } else {
            res.status(401).json({ msg: 'Usuário ou Senha inválidos!' })
        }
    }
}

module.exports = adminController;