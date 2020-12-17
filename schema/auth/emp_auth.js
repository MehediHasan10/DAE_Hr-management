const { model,Schema } = require('mongoose');

// Employee model constructor
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please, provide an username.']
    },
    email: {
        type: String,
        required: [true, 'Please, provide an email.'],
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true, 'Please, provide a password.'],
        minlength: [8, 'Minimum length of the password is 8.']
    },
    phoneNumber:{
        type: String,
        required: [true, 'Please, provide a phone number.']
    },
    type: {
        type: String,
        default: 'employee'
    }
});

module.exports = model('employee_auth', EmployeeSchema);