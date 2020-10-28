const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('auth/login.pug', { title: 'Login' });
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.end()
});

module.exports.loginRouter = router;
