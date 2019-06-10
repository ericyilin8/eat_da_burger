var app = require('express');
var burger = require('./burger.js');

var router = app.Router();

router.get('/', function(req, res){
    burger.all(function(data){
      console.log(data);
        var burgers = {
            burgers: data
        };
    res.render("index", burgers);
    })

})

router.post("/api/burgers", function(req, res) {
    burger.create(req.body.name, function(result){
          res.status(200).end();
    });

  });

  router.put("/api/burgers", function(req, res) {
  
    burger.update(req.body.name, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  module.exports = router;