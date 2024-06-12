const express = require('express');
const router = express.Router();

const Log = require('../models/NetLog');

// TODO: implement auth handling

router.post('/db-log', (req, res) => {
    const log = new Log({
        timestamp: req.body.timestamp,
        clientId: 'test client',
        jobId: req.body.jobId,
        logLevel: req.body.logLevel,
        logMessage: req.body.logMessage,
    });

    log.save()
        .then(() => res.send('Logging was successful'))
        .catch(err => res.status(500).send('Server error'));
});

router.post('/flat-log', (req, res) => {
    res.send('Logging was successful'); // TODO: Implement logging
});

module.exports = router;
