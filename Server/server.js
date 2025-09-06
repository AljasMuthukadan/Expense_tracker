const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./Models/userModel');

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Expense_tracker');

mongoose.connection.on("connected", () => {
  const dbName = mongoose.connection.name;
  if (dbName !== "Expense_tracker") {
    console.error(`⚠️ Connected to wrong DB: ${dbName}`);
    process.exit(1); // stop the server
  }
});

const Expense = require('./Models/expenseModel');

// Add new expense
app.post('/expenses', async (req, res) => {
  try {
    const { title, amount, category, userId } = req.body;
    const expense = await Expense.create({ title, amount, category, user: userId });
    res.status(201).json({ message: 'Expense added successfully', expense });
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense', error });
  }
});

// Get user expenses
app.get('/expenses/:userId', async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.params.userId }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
});



app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }).then((user) => {
     if(user) {
        if(user.password === password) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid password' });
        }
     } else {
        res.status(404).json({ message: 'User not found' });
     }
    
      })
})
app.post('/register', async (req, res) => {
    User.create(req.body).then((user) => {
        res.status(201).json({ message: 'User registered successfully', user });
    }).catch((error) => {
        res.status(500).json({ message: 'Error registering user', error });
    });

})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});