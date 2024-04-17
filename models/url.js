const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        shortID: {
            type: String,
            required: true,
            unique: true,
        },
        longURL: {
            type: String,
            required: true,
        },
        createdBy: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;