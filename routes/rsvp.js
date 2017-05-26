var express = require('express');
var router = express.Router();
var RSVP = require('../models/rsvp');


//express post request, takes onAdd rsvp object as parameter and performs upsert to mongodb
router.post('/', function (req, res, next) {
    var rsvp = new RSVP({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        response: req.body.response
    });
    RSVP.findOneAndUpdate({email: rsvp.email}, 
    {$set: {firstName: rsvp.firstName, 
        lastName: rsvp.lastName, 
        email: rsvp.email, 
        response: rsvp.response}},
        {upsert: true, "new": true}, function(err, result) {
     
       if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'RSVP received',
            obj: result
        });
    });
});

//express get request, takes onFind email parameter and performs a find for email on mongodb
router.get('/:_email', function (req, res, next) {
    var _email = req.params._email;
    
    RSVP.findOne({email: _email})
        .exec(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Unable to find',
                error: err
            });
        }
        if (!result) {
            return res.status(500).json({
                title: 'No RSVP found',
                error: {result: 'RSVP not found'}
            });
        }
        res.status(200).json({
            message: 'Success, found RSVP',
            obj: result
        });
    });
});

module.exports = router;