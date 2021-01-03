const { model, Schema } = require('mongoose');

// District API model constructor
const DistrictSchema = new Schema ({
    districtName: { 
        type: String
    }
});

module.exports = model('district', DistrictSchema);

