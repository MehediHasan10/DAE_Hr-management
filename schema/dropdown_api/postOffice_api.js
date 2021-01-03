const { model, Schema } = require('mongoose');

// Post Office API model constructor
const PostOfficeSchema = new Schema ({
    postOfficeName: { 
        type: String
    }
});

module.exports = model('post_office', PostOfficeSchema);

