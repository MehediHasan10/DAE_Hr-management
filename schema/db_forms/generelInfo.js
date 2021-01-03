const { model, Schema } = require('mongoose');

// Employee general info model constructor
const GeneralInfoSchema = new Schema({
    fatherName: {
        type: String
    },
    motherName: {
        type: String
    },
    district:{
        type: Schema.Types.ObjectId,
        ref: 'district'
    },    
    sex: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    religion: {
        type: String
    },
    tinNo: {
        type: String
    },
    batch: {
        type: Schema.Types.ObjectId,
        ref: 'bcs_batch'
    },
    rank: {
        type: Schema.Types.ObjectId,
        ref: 'bcs_rank'
    },
    division: {
        type: Schema.Types.ObjectId,
        ref: 'bcs_division'
    },
    office: {
        type: Schema.Types.ObjectId,
        ref: 'cadre_office'
    },
    designation: {
        type: Schema.Types.ObjectId,
        ref: 'cadre_designation'
    }
});

module.exports = model('employee_generalInfo', GeneralInfoSchema);
