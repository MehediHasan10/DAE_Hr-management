const { model, Schema } = require('mongoose');

// Employee promotion info model constructor
const PromotionSchema = new Schema({
    dateOfPromotion: { 
        type: Date
    },
    goDate: {
        type: Date
    },
    rank: {
        type: Schema.Types.ObjectId,
        ref: 'bcs_rank'
    },
    payScale: {
        type: Schema.Types.ObjectId,
        ref: 'cadre_payScale'
    },
    natureOfPromotion: {
        type: String
    },
    srScaleRule: {
        type: String 
    }
});

module.exports = model('employee_promotionInfo',PromotionSchema );
