
const assert = require('chai').assert;
const Expense = require('../model/Expense');

describe('Deleting records', function() {

  let newExpence;

  beforeEach(function(done){
    newExpence = new Expense({
      amount: 100,
      date: Date.parse("11/30/2011"),
      comment: 'No comment',
      category: 'Food'
    });
    newExpence.save().then(function() {
      done();
    });
  });
  
  it('Deletes one record from the database', function(done) {
   Expense.findOneAndRemove({date: Date.parse("11/30/2011")}).then(()=> {
    Expense.findOne({date : Date.parse("11/30/2011")}).then((result)=> {
      assert.equal(result, null);
      done();
    });
   });
  });


});

//