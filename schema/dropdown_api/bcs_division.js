const { model, Schema } = require('mongoose');

// BCS Division API model constructor
const BcsDivision = new Schema({
    division: {
        type: String,
    }
});

module.exports = model('bcs_division', BcsDivision);

