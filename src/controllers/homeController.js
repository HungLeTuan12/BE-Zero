const { get } = require("../routes/web")
const connection = require("../config/database");
const getHomePage = (req, res) => {
    return res.render('home.ejs');
    
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