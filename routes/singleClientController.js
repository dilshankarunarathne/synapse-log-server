const authMiddleware = require('../middleware/authMiddleware');

const express = require('express');
const router = express.Router();

router.post('/log', authMiddleware, (req, res) => {
    res.send('Logging was successful');
});

module.exports = router;
