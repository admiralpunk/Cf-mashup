const express = require('express');
const mashupMiddleware = require(`${__dirname}/../middlewares/mashupGenerator`);
const contestMiddleware = require('../middlewares/contestsGenerator');

const router = express.Router();

router.route('/generate').post(mashupMiddleware.generateProblemset);
router.route('/contests').post(contestMiddleware.generateContest);

module.exports = router;