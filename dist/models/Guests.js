"use strict";
// src/models/Guests.ts
var mongooseGuest = require("mongoose");
var SchemaGuest = mongooseGuest.Schema;
var guestSchema = new SchemaGuest({
    name: {
        type: String,
        require: true
    },
    gift: {
        type: String,
        require: false
    },
    sex: {
        type: String,
        require: true
    },
    giveawayStatus: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true
});
var Guest = mongooseGuest.model("Guest", guestSchema);
module.exports = Guest;
