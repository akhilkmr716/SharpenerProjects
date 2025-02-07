const Expense = require('../models/expense');

exports.postExpenseData = async (req, res, next) => {
    try {
        const { amount, desc, cat } = req.body;
        if (!amount || !desc || !cat) {
            return res.status(400).json({ error: "All three inputs should be provided!!!!!" });
        }
        console.log(req.body);
        const expense = await Expense.create({ amount, desc, cat });
        res.status(201).json(expense);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error creating expense record "});
    }
}

exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.findAll();
        console.log(expenses);
        if (expenses.length == 0) {
            return res.status(404).json({ message: "No expense record found." });
        }
        res.status(200).json(expenses);
    } catch (error) {
        console.error("Error fetching expense records", error);
        res.status(500).json({error: "Internal server error"});
    }
}

exports.deleteExpense = async (req, res, next) => {
    try {
        const expense = await Expense.findByPk(req.params.id);
        if(!expense) {
            return res.status(404).json({ error: "Expense record not found" });
        }

        await expense.destroy();
        res.json({ message: "Expense deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting expense" });
    }
}

exports.editExpense = async (req, res, next) => {
    try {
        const { amount, desc, cat } = req.body;
        console.log(req.body);
        if(!amount && !desc && !cat) {
            return res.status(400).json({ error: "At least one field (amount or description or category) is required for update" });
        }
        const expense = await Expense.findByPk(req.params.id);
        if(!expense) {
            return res.status(404).json({ error: "Expense record not found" });
        }
        if(amount) expense.amount = amount;
        if(desc) expense.desc = desc;
        if(cat) expense.cat = cat;

        await expense.save();
        res.json({ message: "Expense record updated successfully", expense});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server Error" });
    }
}