const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: String,
    score: Number, 
    time: Date,
});
export const scoreModel = mongoose.model('Score', scoreSchema);