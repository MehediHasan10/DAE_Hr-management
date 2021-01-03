const { model, Schema } = require('mongoose');

// Employee Education Info model constructor
const EducationModel = new Schema({
    degree: { 
        type: String
    },
    groupOrSubject: {
        type: String
    },
    institute: {
        type: String
    },
    board: {
        type: String
    },
    resultGPA: {
        type: String
    },
    passingYear: {
        type: String
    }
});

module.exports = model('employee_educationInfo', EducationModel);
