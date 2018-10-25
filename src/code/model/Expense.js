const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  amount: Number,
  date: Date,
  comment: String,
  category: String
});

const Expense = mongoose.model('expenses', ExpenseSchema);

module.exports = Expense;

// export default class Expense {
  
//   constructor (amount, date, comment, category) {
//     this.amout = amount;
//     this.date = date;
//     this.comment = comment;
//     this.category = category;
//   }

//   get amount () {
//     return this.amount;
//   }

//   set amount(amount) {
//     this.amount = amount;
//   }

//   get date () {
//     return this.date;
//   }

//   set date(date) {
//     this.date = date;
//   }

//   get comment () {
//     return this.comment;
//   }

//   set comment(comment) {
//     this.comment = comment;
//   }

//   get category () {
//     return this.category;
//   }

//   set category(category) {
//     this.category = category;
//   }  
// }