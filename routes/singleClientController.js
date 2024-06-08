const authMiddleware = require('../middleware/authMiddleware');

const express = require('express');
const router = express.Router();

router.post('/db-log', authMiddleware, (req, res) => {
    res.send('Logging was successful');
});

router.post('/flat-log', authMiddleware, (req, res) => {
    res.send('Logging was successful');
});

module.exports = router;
