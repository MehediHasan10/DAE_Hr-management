const { model, Schema } = require('mongoose');

// Employee's spouse info model constructor
const SpouseInfoSchema = new Schema({
    name: { 
        type: String
    },
    district: {
        type: Schema.Types.ObjectId,
        ref: 'district'
    },
    occupation: {
        type: String
    },
    designation: {
        type: String
    },
    organization: {
        type: String
    }
});

module.exports = model('employee_spouseInfo', SpouseInfoSchema);
