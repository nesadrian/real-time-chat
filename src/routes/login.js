const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('auth/login.pug', { title: 'Login' });
});

module.exports.loginRouter = router;
