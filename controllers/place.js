const router = require('express').Router();

// First Route created for this file.
router.get('/', (req, res) => {
    res.send('GET /places');
});

module.exports = router;