module.exports = (req, res) => {
    res.sendFile(path.join(__dirname, 'public/mainpage.html'));
}