const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This field is required."],
    },
    url: {
        type: String,
        required: [true, "This field is required."]
    },
    chests: {
        type: Number,
        required: [true, "This field is required."]
    },
    phrase: {
        type: String,
        required: [true, "this field is required."]
    },
    position: {
        type: String,
        required: [true, "This field is required"]
    },
    leg: {
        type: Boolean,
        default: true,
        required: [true, "This field is required"]
    },
    eye: {
        type: Boolean,
        default: true,
        required: [true, "This field is required"]
    },
    hand: {
        type: Boolean,
        default: true,
        required: [true, "This field is required"]
    }
    
}, {timestamps: true});

const Pirate = new mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;