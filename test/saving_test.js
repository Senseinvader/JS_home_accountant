
const assert = require('chai').assert;
const Expense = require('../model/Expense');

describe('Saving records', function() {
  
  it('Saves records to the database', function(done) {
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
});