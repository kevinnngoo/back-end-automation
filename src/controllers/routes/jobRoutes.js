// Set up the routes

const express = require('express'); // Corrected typo here
const router = express.Router();
const JobController = require('../controllers/JobController');

// When someone goes to /api/jobs, we call JobController.getJobs
router.get('/jobs', JobController.getJobs);

// When someone sends data to /api/apply, we call JobController.applyToJob
router.post('/apply', JobController.applyToJob);

module.exports = router;
