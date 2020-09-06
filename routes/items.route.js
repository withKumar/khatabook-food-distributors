const router = require('express').Router();

router
    .route('/')
    .get((req, res) => {
        res.render('Items');
    })

module.exports = router;