const { model, Schema } = require('mongoose');

// Employee Discipline Action model constructor
const DisciplineAction = new Schema({
    offense: {
        type: String,
    },
    natureOfPunishment: {
        type: String,
    },
    punishment: {
        type: String,
    },
    goDate: {
        type: Date
    },
});

module.exports = model('employee_disciplineAction', DisciplineAction);
