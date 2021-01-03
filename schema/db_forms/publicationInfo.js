const { model, Schema } = require('mongoose');

// Employee publication info model constructor
const PublicationInfoSchema = new Schema({
    type: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: Date
    }
});

module.exports = model('employee_publicationInfo', PublicationInfoSchema);