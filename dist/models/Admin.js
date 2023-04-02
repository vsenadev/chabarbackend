"use strict";
// src/models/Admin.ts
var mongooseAdmin = require("mongoose");
var SchemaAdmin = mongooseAdmin.Schema;
var adminSchema = new SchemaAdmin({
    user: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});
var Admin = mongooseAdmin.model("Admin", adminSchema);
module.exports = Admin;
