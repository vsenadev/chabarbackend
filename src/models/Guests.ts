const mongooseGuest = require('mongoose');

const SchemaGuest = mongooseGuest.Schema;

const guestSchema = new SchemaGuest({
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
},{ timestamps: true }
);

const Guest = mongooseGuest.model("Guest", guestSchema);

module.exports = Guest;