import { Request, Response } from "express";
import { model } from "mongoose";

const GiftsModel = require("../models/Gifts");

const giftsController = { 
    create:async (req: Request, res: Response) => {
        try {
            const gifts = [{
                name: req.body.name,
                sorted: req.body.sorted
            }];

            const response = await GiftsModel.create(gifts)

            res.status(201).json({ response, msg: "presente criado com sucesso." });
        } catch (error) {
            console.log(error)
        }
    },
    createMany:async (req: Request, res: Response) => {
        try {
            const giftsList = req.body;
            const response = await GiftsModel.insertMany(giftsList);
            res.status(201).json({ response, msg: "presentes criados com sucesso." });
        } catch (error) {
            console.log(error)
        }
    },
    getAll:async (req: Request, res: Response) => {
        try {
            const gifts = await GiftsModel.find();

            res.json(gifts)
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;

            const gifts = {
                name: req.body.name,
                sorted: req.body.sorted
            }

            const updatedGifts = await GiftsModel.findByIdAndUpdate(id, gifts);

            if(!updatedGifts){
                res.status(404).json({ msg: "Presente não encontrado."});
                return;
            }

            res.status(200).json({ msg: "Presente atualizado com sucesso." })
        } catch (error) {
            
        }
    }
}

module.exports = giftsController;