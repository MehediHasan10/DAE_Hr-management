const { model, Schema } = require('mongoose');

// BCS Batch API model constructor
const BatchSchema = new Schema({
    batch: {
        type: String,
    }
});

module.exports = model('bcs_batch', BatchSchema);

