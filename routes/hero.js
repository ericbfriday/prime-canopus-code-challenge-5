var express = require('express');
var router = express.Router();
var Hero = require('../models/heroModel');

// get all heros
router.get('/', function(req, res) {
  // TODO: add code to return all heros from the db
  Hero.find()
  .then(function(data)  {
    console.log('logging data', data);
    res.send(data);
  });
});

// post to create a new hero
// DO NOT MODIFY
router.post('/', function(req, res) {
  console.log('inside hero post', req.body);

  var newHero = new Hero(req.body);

  newHero.save(function(err) {
    console.log('here');
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('successful hero created');
      res.sendStatus(201);
    }
  });
});

module.exports = router;
