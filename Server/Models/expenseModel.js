// Models/expenseModel.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },       // e.g. "Grocery"
  amount: { type: Number, required: true },      // e.g. 1500
  category: { type: String },                    // e.g. "Food", "Travel"
  date: { type: Date, default: Date.now },       // when expense happened
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // link to User
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
