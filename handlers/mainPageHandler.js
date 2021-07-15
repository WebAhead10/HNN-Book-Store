const db = require('../database/connection')
const path = require('path')


const getAllBooks = (req, res) => {
    db.query("SELECT * FROM users").then((result) => {
        res.json(JSON.stringify(result.rows))
    });
    
}

const mainPageLayout = (req, res) => {
    // res.cookies("user", 'user', {
    //     maxAge: 600000
    // });
    res.sendFile(path.join(__dirname, "..", 'public/mainpage.html'))
}

module.exports = {
    mainPageLayout,
    getAllBooks
};