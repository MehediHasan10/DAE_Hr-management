const { model, Schema } = require('mongoose');

// BCS Cadre Office API model constructor
const OfficeSchema = new Schema({
    officeName: {
        type: String
    }
});

module.exports = model('cadre_office', OfficeSchema);
