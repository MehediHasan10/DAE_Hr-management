const router = require('express').Router();

const DistrictModel = require('../../schema/dropdown_api/district_api');
const UpazillaModel = require('../../schema/dropdown_api/upazilla_api');
const PostOfficeModel = require('../../schema/dropdown_api/postOffice_api');
const BcsBatchModel = require('../../schema/dropdown_api/bcs_batch');
const BcsRankModel = require('../../schema/dropdown_api/bcs_rank');
const BcsDivisionModel = require('../../schema/dropdown_api/bcs_division');
const CadreOfficeModel = require('../../schema/dropdown_api/cadre_office');
const CadreDesignationModel = require('../../schema/dropdown_api/cadre_designation');

// @POST  -  /addDistrict
// API for adding home district
router.post('/addDistrict', async (req, res) => {
    try{
        const districtName = new DistrictModel(req.body);
        await districtName.save();
        res.send({ 
            success: true,
            message: `New District name is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });        
    }
});

// @POST  -  /addUpazilla
// API for adding upazilla
router.post('/addUpazilla', async (req, res) =>{
    try{
        const upazillaName = new UpazillaModel(req.body);
        await upazillaName.save();
        res.send({ 
            success: true,
            message: `New Upazilla name is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });  
    }
});

// @POST  -  /addPostOffice
// API for adding Post Office
router.post('/addPostOffice', async (req, res) => {
    try{
        const postOfficeName = new PostOfficeModel(req.body);
        await postOfficeName.save();
        res.send({ 
            success: true,
            message: `New Post Office name is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        }); 
    }
});

// @POST  -  /addBatch
// API for adding a batch of BCS 
router.post('/addBatch', async (req, res) => {
    try{
        const batchName = new BcsBatchModel(req.body);
        await batchName.save();
        res.send({ 
            success: true,
            message: `New BCS Batch is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });  
    }
});

// @POST  -  /addRank
// API for adding a new rank
router.post('/addRank', async (req, res) => {
    try{
        const rankName = new BcsRankModel(req.body);
        await rankName.save();
        res.send({ 
            success: true,
            message: `New BCS Rank is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });  
    }
});

// @POST  -  /addDivision
// API for adding a new division
router.post('/addDivision', async (req, res) => {
    try{
        const divisionName = new BcsDivisionModel(req.body);
        await divisionName.save();
        res.send({ 
            success: true,
            message: `New BCS Division is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        }); 
    }
});


// @POST  -  /addOffice
// API for adding a new Cadre Office
router.post('/addOffice', async (req, res) => {
    try{
        const officeName = new CadreOfficeModel(req.body);
        await officeName.save();
        res.send({ 
            success: true,
            message: `New Cadre Office is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addDesignation
// API for adding a new Cadre Designation
router.post('/addDesignation', async (req, res) => {
    try{
        const designationName = new CadreDesignationModel(req.body);
        await designationName.save();
        res.send({ 
            success: true,
            message: `New Cadre Designation is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

module.exports = router;