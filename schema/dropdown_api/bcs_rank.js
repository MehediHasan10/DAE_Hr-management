const { model, Schema } = require('mongoose');

// BCS Batch Rank API model constructor
const BatchRank = new Schema({
    rank: { 
        type: String,
    }
});

module.exports = model('bcs_rank', BatchRank);
