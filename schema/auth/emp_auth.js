const { model,Schema } = require('mongoose');

// Employee auth model constructor
// This is also a part of the employee database (Basic info model)
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please, provide an username']
    },
    dob:{
        type: Date
    },
    pscMerit: {
        type: String,
        required: [true, 'Please, provide your psc merit serial number']
    },
    appointmentGOdate: {
        type: Date,
        required: [true, 'Please, provide your GO date']
    },
    nationalId: {
        type: String,
        required: [true, 'Please, provide your national ID number']
    },
    email: {
        type: String,
        required: [true, 'Please, provide an email'],
        unique: true,
        lowercase: true
    },
    phoneNumber:{
        type: String,
        required: [true, 'Please, provide a phone number']
    },
    type: {
        type: String,
        default: 'employee'
    },
    password:{
        type: String,
        required: [true, 'Please, provide a password'],
        minlength: [8, 'Minimum length of the password is 8']
    }
});

module.exports = model('employee_auth', EmployeeSchema);