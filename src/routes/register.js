const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('auth/register.pug', { title: 'Register' });
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.end()
});

module.exports.registerRouter = router;
