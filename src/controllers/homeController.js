const { get } = require("../routes/web")
const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDUsers");
const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
    
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
const getUpdatePage = async (req, res) => {
    const userID = req.params.id;
    let [results, fields] = await connection.query('SELECT * FROM Users where id = ?',[userID]);
    let user = results && results.length > 0 ? results[0] : {};
    res.render('edit.ejs', {userEdit : user})
}
module.exports = {
    getHomePage, getABC, getTuanHung, postCreateUser, postUserPage, getUpdatePage
}