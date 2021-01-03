const { model, Schema } = require('mongoose');

// Employee address info model constructor
const AddressModel = new Schema({
    presentAddress:{
        district: {
            type: Schema.Types.ObjectId,
            ref: 'district'
        },
        upazilla: {
            type: Schema.Types.ObjectId,
            ref: 'upazilla'
        },
        postOffice: {
            type: Schema.Types.ObjectId,
            ref: 'post_office'
        },
        vilage: {
            type: String 
        },
        road: {
            type: String
        }
    },
    permanentAddress: {
        district: {
            type: Schema.Types.ObjectId,
            ref: 'district'
        },
        upazilla: {
            type: Schema.Types.ObjectId,
            ref: 'upazilla'
        },
        postOffice: {
            type: Schema.Types.ObjectId,
            ref: 'post_office'
        },
        vilage: {
            type: String 
        },
        road: {
            type: String
        }
    }
});

module.exports = model('employee_addressInfo', AddressModel);
