const mongooseAdmin = require("mongoose");

const SchemaAdmin = mongooseAdmin.Schema;

const adminSchema = new SchemaAdmin({
    user: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true }
);

const Admin = mongooseAdmin.model("Admin", adminSchema);

module.exports = Admin;