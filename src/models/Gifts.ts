const mongooseGifts = require('mongoose');

const SchemaGifts = mongooseGifts.Schema;

const giftSchema = new SchemaGifts({
    name: {
        type: String,
        require: true
    },
    sorted: {
        type: Boolean,
        require: true
    }
},{ timestamps: true });

const Gifts = mongooseGifts.model("Gifts", giftSchema);

module.exports = Gifts;