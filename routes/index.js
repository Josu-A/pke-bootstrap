const express = require('express');
const router = express.Router();

router.get(['/', '/index'], (req, res) => {
    res.render('index');
});

router.get('/about-us', (req, res) => {
    res.render('about-us');
});

router.get('/araudia', (req, res) => {
    res.render('araudia');
});

router.get('/egutegia', (req, res) => {
    res.render('egutegia');
});

router.get('/galdetegia', (req, res) => {
    res.render('galdetegia');
});

router.get('/memoriak', (req, res) => {
    res.render('memoriak');
});

module.exports = router;
