
const assert = require('chai').assert;
const Expense = require('../model/Expense');

describe('Finding records', function() {

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
  
  it('Finds one record in the database', function(done) {
   Expense.findOne({amount: 100}).then(function(result) {
     assert.equal(result.amount, 100);
     done();
   });
  });

  it('Finds one record bu ID in the database', function(done) {
    Expense.findOne({_id: newExpence._id}).then(function(result) {
      assert.equal(result._id.toString(), newExpence._id.toString());
      done();
    });
   });

});