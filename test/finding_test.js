const mocha = require('mocha');
const assert = require('chai').assert;
const Expense = require('../model/Expense');

describe('Finding records', function() {

  beforeEach(function(done){
    var newExpence = new Expense({
      amount: 100,
      date: Date.parse("11/30/2011"),
      comment: 'No comment',
      category: 'Food'
    });
    newExpence.save().then(function() {
      assert(!newExpence.isNew);
      done();
    });
  });
  
  it('Finds one record in the database', function(done) {
   Expense.findOne({amount: 100}).then(function(result) {
     assert.equal(result.amount, 100);
     done();
   });
  });
});