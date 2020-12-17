const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Employee = require('../../schema/auth/emp_auth');
const Secret = require('../../schema/secret/secret');

// @POST  -  /signup
// Employee Registration
router.post('/signup', async (req,res) => {
    const { name, email, password, phoneNumber, secret } = req.body;

    // Simple validation
    if (!name || !email || !password || !phoneNumber) {
        return res.status(400).json({ message : "PLease enter all fields"});
    };

    // Check for existing user
    try{
        const user = await Employee.findOne({ phoneNumber });
        if (user) throw Error('User already exists');

        const secret_match = await Secret.findOne({
            reg_secretKey : secret
        });
        if (!secret_match) throw Error('Secret is not matching');

        // Create salt & hash
        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('Something went wrong with bcrypt');

        const hash = await bcrypt.hash(password, salt);
        if (!hash) throw Error('Something went wrong with the password');

        const newEmployee = new Employee({
            name,
            email,
            phoneNumber,
            password: hash
        });

        const savedEmployee = await newEmployee.save();
        if (!savedEmployee) throw Error('Something went wrong saving the employee');

        const token = jwt.sign({ id: savedEmployee._id }, process.env.jwt_secret, {
            expiresIn: 3600 
        });

        res.send({success: true, message: `New Employee ${savedEmployee.name} is created`});
    } catch (error) {
        res.send({ success: false, message: error.message });
    }

});

module.exports = router;