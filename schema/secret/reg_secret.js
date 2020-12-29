//Registration authentication secret model
const {model, Schema} = require('mongoose');

// Secret constructor
const Secret = new Schema({
    reg_secretKey: {
        type: String,
        unique: true
    }
});

module.exports = model('secret', Secret);