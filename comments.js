//create web server
var express = require('express');
var router = express.Router();

//get the comments model
var comments = require('../models/comments');

//GET comments main page
router.get('/', function(req, res, next) {
    //use comments model to run a query
    comments.find(function(err, comments){
        if(err){console.log(err); res.send(err);}
        else{
            //no error, data returned
            //console.log(comments);
            res.render('comments', {
                title: 'Comments',
                comments: comments
            });
        }
    });
});

//make public
module.exports = router;