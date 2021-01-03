const router = require('express').Router();

const GeneralInfoModel = require('../../schema/db_forms/generelInfo');
const AddressInfoModel = require('../../schema/db_forms/addressInfo');
const ChildInfoModel = require('../../schema/db_forms/childrenInfo');
const SpouseInfoModel = require('../../schema/db_forms/spouseInfo');
const DisciplinaryActionModel = require('../../schema/db_forms/disciplineAction');
const EducationInfoModel = require('../../schema/db_forms/educationInfo');
const TrainingInfoModel = require('../../schema/db_forms/trainingInfo');
const TravelInfoModel = require('../../schema/db_forms/foreignTravel');
const AwardInfoModel = require('../../schema/db_forms/awardInfo');
const PostingInfoModel = require('../../schema/db_forms/postingInfo');
const PromotionModel = require('../../schema/db_forms/promotionInfo');
const PublicationModel = require('../../schema/db_forms/publicationInfo');

// @POST  -  /addGeneralInfo
// Route for general information form 
router.post('/addGeneralInfo', async (req, res) => {
    try{
        const generalInfo = new GeneralInfoModel(req.body);
        await generalInfo.save();
        res.send({ 
            success: true,
            message: `New General Information is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        }); 
    }
});

// @POST  -  /addAddressInfo
// Route for Address Information form                           
router.post('/addAddressInfo', async (req, res) => {
    try{
        const addressInfo = new AddressInfoModel(req.body);
        await addressInfo.save();
        res.send({ 
            success: true,
            message: `New Address Information is added !`
        });
    } catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  -  /addChildInfo
// Route for Children Information form                           
router.post('/addChildInfo', async (req, res) => {
    try{
        const childInfo = new ChildInfoModel(req.body);
        await childInfo.save();
        res.send({ 
            success: true,
            message: `New Child Information is added !`
        });
    } catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  -  /addSpouseInfo
// Route for Spouse Information form 
router.post('/addSpouseInfo', async (req, res) => {
    try{
        const spouseInfo = new SpouseInfoModel(req.body);
        await spouseInfo.save();
        res.send({ 
            success: true,
            message: `New Spouse Information is added !`
        });
    }catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
})

// @POST  -  /adddisciplineAction
// Route for Disciplinary Action Form                                                       
router.post('/adddisciplineAction', async (req, res) => {
    try{
        const disciplineActionInfo = new DisciplinaryActionModel(req.body);
        await disciplineActionInfo.save();
        res.send({ 
            success: true,
            message: `New Discipline Information is added !`
        });
    } catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  -  /addEduInfo
// Route for Educational information Form 
router.post('/addEduInfo', async (req, res) => {
    try{
        const eduInfo = new EducationInfoModel(req.body);
        await eduInfo.save();
        res.send({ 
            success: true,
            message: `New Educational Information is added !`
        });
    } catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  - /addTrainingInfo
// Route for Training Information Form
router.post('addTrainingInfo', async (req, res) => {
    try{
        const trainingInfo = new TrainingInfoModel(req.body);
        await trainingInfo.save();
        res.send({ 
            success: true,
            message: `New Training Information is added !`
        });
    } catch (err) {
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  - /addTravelInfo
// Route for Travel Information Form
router.post('/addTravelInfo', async (req, res) => {
    try{
        const travelInfo = new TravelInfoModel(req.body);
        await travelInfo.save();
        res.send({ 
            success: true,
            message: `New Travel Information is added !`
        });
    } catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  - /addAwardInfo
// Route for Award Information Form
router.post('/addAwardInfo', async (req, res) => {
    try{
        const awardInfo = new AwardInfoModel(req.body);
        await awardInfo.save();
        res.send({ 
            success: true,
            message: `New Award Information is added !`
        });
    }catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  -  /addPostingInfo 
// Route for Posting Information Form
router.post('/addPostingInfo', async (req, res) => {
    try{
        const postingInfo = new PostingInfoModel(req.body);
        await postingInfo.save();
        res.send({ 
            success: true,
            message: `New Posting Information is added !`
        });
    } catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  -  /addPromotionInfo 
// Route for Promotion Information Form
router.post('/addPromotionInfo', async(req, res) => {
    try{
        const promotionInfo = new PromotionModel(req.body);
        await promotionInfo.save();
        res.send({ 
            success: true,
            message: `New Promotion Information is added !`
        });
    } catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
});

// @POST  -  /addPublicationInfo 
// Route for Publication Information Form
router.post('/addPublicationInfo', async (req, res) => {
    try{
        const publicationInfo = new PublicationModel(req.body);
        await publicationInfo.save();
        res.send({ 
            success: true,
            message: `New Publication Information is added !`
        });
    } catch(error){
        res.send({
            success: false,
            message: error.message   
        });
    }
})

module.exports = router;
