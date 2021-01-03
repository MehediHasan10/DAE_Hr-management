const { model, Schema } = require('mongoose');

// BCS Cadre Designation API Model constructor
const CadreDesignation = new Schema({
    designation: {
        type: String
    }
}); 

module.exports = model('cadre_designation', CadreDesignation);
