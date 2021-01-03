const { model, Schema } = require('mongoose');

// Employee posting info model constructor
const PostingModel = new Schema({
    designation: {
        type: Schema.Type.ObjectId,
        ref: 'cadre_designation'
    },
    organization: {
        type: String
    },
    country: {
        type: String
    },
    orderDate: {
        type: Date
    },
    JoiningDate: {
        type: Date
    },
    payscale: {
        type: Schema.Types.ObjectId,
        ref: 'cadre_payScale'
    },
    status: {

    }
});

module.exports = model('employee_postingInfo'. PostingModel);
