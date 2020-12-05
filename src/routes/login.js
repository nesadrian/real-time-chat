const express = require('express');
const { encodeToken } = require('../services/authentication')

const mockDB = {
    users: [
        {
            username: "u",
            password: "p"
        }
    ]
}

const userExists = (username, password) => mockDB.users.find(user => user.username === username && user.password === password);

const router = express.Router();

router.get('/', (req, res) => {
    res.render('auth/login.pug', { title: 'Login' });
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (userExists(username, password)) {
        const token = encodeToken(req.body);
        res.cookie('token', token);
        res.sendStatus(200);
    }
    res.sendStatus(401);
});

module.exports.loginRouter = router;
