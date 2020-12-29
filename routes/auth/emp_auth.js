const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Employee = require('../../schema/auth/emp_auth');
const Secret = require('../../schema/secret/reg_secret');

// @POST  -  /signup
// Employee Registration
router.post('/signup_api', async (req,res) => {
    const { name, dob, pscMerit, appointmentGOdate, nationalId, email, password, phoneNumber, secret } = req.body;

    // Simple validation
    if (!name || !dob || !pscMerit || !appointmentGOdate || !nationalId || !email || !password || !phoneNumber || !secret) {
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
            dob,
            pscMerit,
            appointmentGOdate,
            nationalId,
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

// @POST  -  /signin
// Employee Login
router.post('/signin_api', async (req, res) => {
    const { phoneNumber, password } = req.body;
    
    // Simple validation
    if(!phoneNumber || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    };

    try { 
        // Check for existing user 
        const user = await Employee.findOne({ phoneNumber });
        if (!user) throw Error('Employee user does not exist');

        // Check for password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('Invalid credentials');

        const token = jwt.sign({ id: user._id, email: user.email, type: user.type}, process.env.jwt_secret, { expiresIn: 3600 });
        if (!token) throw Error('Couldnt sign the token');

        res.send(
            {
                success: true, 
                token: token, 
                message: `Agent user ${user.name} is logged in..`
        });

    } catch(error){
        res.send({ 
            success: false,
            message: error.message
        });
    }
});

module.exports = router;