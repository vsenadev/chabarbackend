import mongoose from "mongoose";

const mongo = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true)

        await mongo.connect(
            "mongodb+srv://viniciussena:10092019JUvi@chabardb.2vwcmbn.mongodb.net/test"
        )

        console.log("connect")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;