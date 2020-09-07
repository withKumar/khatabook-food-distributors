const router = require('express').Router();
const Business = require('../controller/Business.Controller');
const businessModel = require('../models/business.models');

let myData = ['America', 'Germany', 'India', 'Russia']

router.use((req, res, next) => {
    console.log(req.url);
    next();
})

router
    .route('/')
    .get((req, res) => {
        res.render('Business')
    })

router
    .route('/all')
    .post((req, res) => {
        businessModel.find()
            .then(res => {
                console.log(res);
            })
    })

router
    .route('/new')
    .get((req, res) => {
        res.render('BusinessDetialsEntry');
    })
    .post(Business.add_new_business);

router
    .route('/look')
    .get((req,res) => {
        res.render('');
    })
    .post();

module.exports = router;