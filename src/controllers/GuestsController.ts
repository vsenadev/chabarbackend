import { Request, Response } from "express";

const GuestModel = require("../models/Guests");
const GiftsModel = require("../models/Gifts");

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const guestController = {
    create:async (req: Request, res: Response) => {
        try {
            const guest = {
                name: req.body.name,
                gift: req.body.gift,
                sex: req.body.sex,
                giveawayStatus: req.body.giveawayStatus
            };

            const response = await GuestModel.create(guest)

            res.status(201).json({ response, msg: "Convidado criado com sucesso." });
        } catch (error) {
            console.log(error)
        }
    },
    createMany:async (req: Request, res: Response) => {
        try {
            const guestList = req.body;
            const response = await GuestModel.insertMany(guestList);
            res.status(201).json({ response, msg: "Convidados criados com sucesso." });
        } catch (error) {
            console.log(error)
        }
    },
    getAll:async (req: Request, res: Response) => {
        try {
            const guest = await GuestModel.find();

            res.json(guest)
        }catch (error) {
            console.log(error)
        }
    },
    get:async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const guest = await GuestModel.findById(id);

            if(!guest){
                res.status(404).json({ msg: "Convidado não encontrado"});
                return;
            }

            res.json(guest);
        } catch (error) {
            console.log(error)
        }
    },
    delete:async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const guest = await GuestModel.findById(id);

            if(!guest){
                res.status(404).json({ msg: "Convidado não encontrado."});
                return;
            }

            const deletedService = await GuestModel.findByIdAndDelete(id);

            res.status(200).json({ deletedService, msg:"Convidado removido com sucesso." });
        } catch (error) {
            console.log(error)
        }
    },
    update:async (req: Request, res: Response) => {
        try {
            const id = req.params.id;

            const guest = {
                name: req.body.name,
                gift: req.body.gift,
                sex: req.body.sex,
                giveawayStatus: req.body.giveawayStatus
            }

            const updatedGuest = await GuestModel.findByIdAndUpdate(id, guest);

            if(!updatedGuest){
                res.status(404).json({ msg: "Convidado não encontrado."});
                return;
            }

            res.status(200).json({ msg: "Convidado atualizado com sucesso." })
        } catch (error) {
            console.log(error)
        }
    },
    sortedGift:async (req: Request, res: Response) => {
        const id = req.params.id;

        const gifts = await GiftsModel.find({sorted: false});
        var giftsList:any = [];
        var troy = '';

        gifts.forEach( (element: any) => {
            giftsList.push(element.name)
        });

        if(giftsList.length != 1 ){
            const sorted = getRandomIntInclusive(0 , giftsList.length);
            troy = giftsList[sorted];
        }else{
            troy = giftsList[0];
        }

        const guest = {
            name: req.body.name,
            gift: troy,
            sex: req.body.sex,
            giveawayStatus: true
        }

        const turnOffGift = await GiftsModel.find({ name: troy})

        const giftSelect = {
            name: troy,
            sorted: true
        }

        const updatedGuest = await GuestModel.findByIdAndUpdate(id, guest);
        const updateGift = await GiftsModel.findByIdAndUpdate(turnOffGift[0]._id, giftSelect)

        res.status(200).json({ msg: "Presente soretado com sucesso." });
    }
}

module.exports = guestController;