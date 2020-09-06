const router = require('express').Router();

router
    .route('/')
    .get((req, res) => {
        res.render('Invoices');
    })

module.exports = router;