const { model, Schema } = require('mongoose');

// BCS Cadre Payscale API model constructor
const PayscaleSchema = new Schema({
    year: { 
        type: String
    },
    amount: {
        type: String
    }
});

module.exports = model('cadre_payScale', PayscaleSchema);