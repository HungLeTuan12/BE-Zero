const express = require('express')
const router = express.Router();
const {getHomePage, getABC, getTuanHung, postCreateUser, postUserPage, getUpdatePage} = require('../controllers/homeController');

// router.Method('/', handler)
router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/tuanhung', getTuanHung);
router.get('/create', postUserPage);
router.get('/update/:id', getUpdatePage);
router.post('/create-user', postCreateUser);

module.exports = router;