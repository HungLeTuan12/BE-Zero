const express = require('express')
const router = express.Router();
const {getHomePage, getABC, getTuanHung} = require('../controllers/homeController');

// router.Method('/', handler)
router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/tuanhung', getTuanHung);

module.exports = router;