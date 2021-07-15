const db = require('../database/connection')
module.exports = (req, res) => {
    res.cookie("user", 'user', {
        maxAge: 600000
    });
    // db.query("SELECT * FROM users").then((result) => {
    //     console.log(result.rows);
    // });
    res.sendFile(path.join(__dirname, 'public/index.html'))
}