const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const {check} = require('express-validator');
router.get('/', dataController.getData );
router.post('/', [
    check('firstName', 'firstName is missing').notEmpty(),
    check('lastName', 'lastName is missing').notEmpty(),
    check('participation', 'Participation should be a number').isNumeric(),
], dataController.addData );

module.exports = router;