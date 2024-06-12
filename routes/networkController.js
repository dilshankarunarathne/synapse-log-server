const express = require('express');
const router = express.Router();

// TODO: implement auth handling

router.post('/db-log', (req, res) => {
    res.send('Logging was successful'); // TODO: Implement logging
});

router.post('/flat-log', (req, res) => {
    
    res.send('Logging was successful'); // TODO: Implement logging
});

module.exports = router;
