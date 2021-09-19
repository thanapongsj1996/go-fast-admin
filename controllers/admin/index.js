exports.getUsers = (req, res) => {
    res.render('home.ejs', { name: 'From controller' })
}