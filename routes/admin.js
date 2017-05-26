var express = require('express');
var router = express.Router();
var RSVP = require('../models/rsvp');


router.get('/', function (req, res, next) {
    RSVP.find({})
    .exec(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Unable to find RSVPs',
                error: err
            });
        }
        res.status(200).json({
            message: 'RSVPs received',
            obj: result
        });
    });
});

module.exports = router;