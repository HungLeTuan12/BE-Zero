const express = require('express')
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Trang khoi dau + Tuan Hung!')
})
  router.get('/abc', (req, res) => {
    res.send('<h1>Hung Tuan Le!</h1>')
})
  router.get('/tuanhung', (req, res) => {
    res.render('sample.ejs')
})
module.exports = router;