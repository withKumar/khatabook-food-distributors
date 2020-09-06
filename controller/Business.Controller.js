const business = require('../models/business.models');


module.exports.add_new_business = (req, res) => {
    console.log(req.body);

    const Business = new business({
        businessName : req.body.business_name,
        businessAdress : req.body.business_address,
        businessContact : req.body.business_contact
    });
    
    Business.save()
        .then(response => {
            console.log('data Inserted');
            res.redirect('/business/new');
        })
        .catch(err => {
            console.log(err);
        })
            
}

module.exports.find_business = (req, res) => {
    console.log(req.url);
    res.end();
}