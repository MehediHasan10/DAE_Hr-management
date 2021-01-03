const { model, Schema } = require('mongoose');

// Upazilla API model constructor
const UpazillaSchema = new Schema({
    upazillaName: { 
        type: String
    }
});

module.exports = model('upazilla', UpazillaSchema);
