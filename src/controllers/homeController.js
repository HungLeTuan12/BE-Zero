const { get } = require("../routes/web")

const getHomePage = (req, res) => {
    res.send('Hello world with Tuan Hung dev')
}
const getABC = (req, res) => {
    res.send('<h1>Hung Tuan Le!</h1>')
}
const getTuanHung = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomePage, getABC, getTuanHung
}