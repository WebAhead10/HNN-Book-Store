const userHandler = (req, res) => {
    res.sendFile(path.join(__dirname, 'public/mainpage.html'));
}

module.exports = userHandler