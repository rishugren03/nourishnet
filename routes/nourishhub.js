const express = require('express');
const router = express.Router();

router.get('/nourishhub', (req, res) => {
    res.render('../views/includes/nourishhub.ejs');
});

module.exports = router;