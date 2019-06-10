var orm = require('./orm.js');
var connection = require('./connection.js');

var burger = {

    all: function(cb) {
     // console.log(cb);
        orm.selectAll(cb);
        //for some reason doing cb(orm...) not working
      }, 
      create: function(burgerName, cb) {
          orm.insertOne(burgerName, cb);
      },
      update: function(burgerName, cb) {
        orm.updateOne(burgerName, cb);
      }



};

module.exports = burger;
/*
$('submit').on('click', function(e){
    e.preventDefault();

    var burger = $('#burgerInput').val().trim();
    orm.insertOne(burger);

})

$('body').on('click', '.devourIt', function(){
    orm.updateOne(this.dataset.burger);


})
*/