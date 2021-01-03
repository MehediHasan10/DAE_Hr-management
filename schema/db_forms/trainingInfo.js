const { model, Schema } = require('mongoose');

// Employee training info model constructor
const TrainingModel = new Schema({
    triningType: {
        type: String
    },
    trainingTitle: {
        type: String
    },
    instituteName: {
        type: String
    },
    Country: {
        type: String
    },
    grade: {
        type: String
    },
    position: {
        type: String
    },
    startingDate: {
        type: String
    },
    ending_Date: {
        type: String
    },    
});

module.exports = model('employee_trainingInfo', TrainingModel);
