const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/accountant');

before(function(done){
  mongoose.connection.once('open', function() {
    console.log('DB connection has been established');
    done();
  }).on('error', function(error) {
    console.log('Connection error: ', error);
  });
});

