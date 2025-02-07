const express = require("express");

const expenseController = require("../controllers/expense");

const router = express.Router();

router.post('/add-expense', expenseController.postExpenseData);

router.get('/get-expenses', expenseController.getExpenses);

router.delete('/delete-expense/:id', expenseController.deleteExpense);

router.put('/edit-expense/:id', expenseController.editExpense);

module.exports = router;