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
const postCreateUser = async (req, res) => {
    let email = req.body.emailID;
    let name = req.body.Name;
    let city = req.body.city;
   
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,[email, name, city]
        );
    console.log(">>>results: ", results);
    res.send('Cretae user success !!');
}
const postUserPage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomePage, getABC, getTuanHung, postCreateUser, postUserPage
}