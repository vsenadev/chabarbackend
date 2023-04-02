"use strict";
// src/models/Gifts.ts
var mongooseGifts = require("mongoose");
var SchemaGifts = mongooseGifts.Schema;
var giftSchema = new SchemaGifts({
    name: {
        type: String,
        require: true
    },
    sorted: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true
});
var Gifts = mongooseGifts.model("Gifts", giftSchema);
module.exports = Gifts;
