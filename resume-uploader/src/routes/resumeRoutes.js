const {Router} = require('express');
const { uploadResumeDetails, getResumebyId, getResumeByName } = require('../controllers/resumeController');

const router = new Router();

router.post('/api/uploadResumeDetails', uploadResumeDetails);
router.get('/api/getResumebyId/:id', getResumebyId);
router.get('/api/getResumeByName/:name', getResumeByName);

module.exports = router;