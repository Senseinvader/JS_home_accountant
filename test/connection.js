const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/accountant');

before((done)=> {
  mongoose.connection.once('open', ()=> {
    console.log('DB connection has been established');
    done();
  }).on('error', (error)=> {
    console.log('Connection error: ', error);
  });
});

beforeEach((done)=> {
  mongoose.connection.collections.expenses.drop(()=> {
    done();
  });
});

