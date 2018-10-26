
const assert = require('chai').assert;
const Expense = require('../model/Expense');

describe('Updating records', function() {

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
  
  it('Updates one record in the database', function(done) {
    Expense.findOneAndUpdate({amount : 100}, {amount : 150}).then(()=> {
      Expense.findOne({_id : newExpence._id}).then((result)=> {
        assert.equal(result.amount, 150);
        done();
      })
    })
  });


});